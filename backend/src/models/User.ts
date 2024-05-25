import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema (
    {
    username: {type: String, required: true, unique: true},
    fullname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true},
    age: {type: Number},
    password: {type: String, required: true, unique: true},
    balance: {type: Number}
    }, 
    {
    timestamps: true
    }
);

export const User = mongoose.model('User', UserSchema);