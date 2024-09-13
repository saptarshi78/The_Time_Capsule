import multer from 'multer';
import path from 'path';
import { storage } from '../config/multer.config.js';
import { CapsuleModel } from '../models/Capsule.js';

const router = express.Router();

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB file size limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
});

// POST /api/capsules - Create a new capsule
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { message, openDate } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const newCapsule = new CapsuleModel({message,imageUrl,openDate});
        await newCapsule.save();

        res.status(201).json({ capsule: newCapsule, link: `${req.protocol}://${req.get('host')}/api/capsules/${newCapsule._id}` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/capsules/:id - Get a capsule by ID
router.get('/:id', async (req, res) => {
    try {
        const capsule = await CapsuleModel.findById(req.params.id);

        if (!capsule) {
            return res.status(404).json({ error: 'Capsule not found' });
        }

        const now = new Date();

        if (now >= new Date(capsule.openDate)) {
            res.status(200).json({ capsule });
        } else {
            res.status(403).json({ error: 'This capsule cannot be opened yet!' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

