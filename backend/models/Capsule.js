import mongoose from 'mongoose'; // Ensure mongoose is imported
const { Schema } = mongoose;

const capsuleSchema = new Schema({
    message: {
        type: String,
        required: true,
        maxlength: 5000
    },
    imageUrl: {
        type: String,
        required: false
    },
    openDate: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const CapsuleModel = mongoose.model('Capsule', capsuleSchema);
