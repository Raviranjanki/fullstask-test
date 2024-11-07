import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
    },
    accountNumber: Number,
});

export const Account = mongoose.model("Account", accountSchema);
