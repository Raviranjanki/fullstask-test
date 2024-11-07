import { Account } from "../model/account.js";
import { Transaction } from "../model/transaction.js";

export const getTransactions = async (req, res, next) => {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.send(transactions);
};

export const addTransaction = async (req, res, next) => {
    const { amount, description, type } = req.body;

    if (!amount || !description || !type) {
        return res.status(400).send({ message: "All fields are requireds" });
    }

    if (isNaN(amount) || amount <= 0) {
        return res.status(400).send({ message: "Please enter valid amount." });
    }

    let account = await Account.findOne();

    if (!account) {
        account = await Account.create({ balance: 0 });
    }

    if (type === "credit") {
        account.balance += +amount;
        await account.save();

        const transaction = await createTransaction(
            amount,
            description,
            type,
            account.balance
        );
        return res.status(201).send(transaction);
    }

    if (type === "debit") {
        if (account.balance < amount) {
            return res.status(400).send({ message: "Insufficient Balance." });
        }

        account.balance -= amount;
        await account.save();

        const transaction = await createTransaction(
            amount,
            description,
            type,
            account.balance
        );
        return res.status(201).send(transaction);
    }

    return res
        .status(400)
        .send({ message: "Please provide a valid type of tranasaction." });
};

const createTransaction = async (amount, description, type, currentBalance) => {
    return await Transaction.create({
        amount: +amount,
        description,
        type,
        currentBalance,
    });
};
