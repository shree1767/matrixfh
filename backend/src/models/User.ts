import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema (
    {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true},
    age: {type: Number},
    password: {type: String, required: true, unique: true},
    balance: {type: Float32Array}
    }, 
    {
    timestamps: true
    }
);

export const User = mongoose.model('User', UserSchema);