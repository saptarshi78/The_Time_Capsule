import dotenv from 'dotenv';
import express from 'express';
import { connectToDb } from './config/db.js';
dotenv.config();

const app = express();

// connect to db
connectToDb();

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));


// Routes
// app.use('/api/capsules', capsuleRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    return res.status(200).json({"message":"running fine!"})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
