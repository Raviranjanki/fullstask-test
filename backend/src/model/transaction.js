import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            enum: ["credit", "debit"],
        },
        currentBalance: Number,
    },
    {
        timestamps: true,
    }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
