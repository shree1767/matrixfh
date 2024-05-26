import { time } from 'console';
import { Timestamp } from 'mongodb';
import mongoose, { Schema } from 'mongoose';

export const TransactionSchema = new Schema (
    {
        balance_deducted: {type: String, required: true},
        item_purchased: {type: String, required: true},
        quantity: {type: Number, required: true},
        date: {type: Date, required: true},
        user: {type: String, required: true},
        successfull: {type: Boolean}
    },
    {
        timestamps: true
    }
)

export const Transaction = mongoose.model("Transaction", TransactionSchema);