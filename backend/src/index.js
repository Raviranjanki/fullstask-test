import express from "express";
import { connectDB } from "./lib/connectDB.js";
import { transactionRouter } from "./routes/transactions.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/v1/transactions", transactionRouter);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is running on port: ", PORT);
        });
    })
    .catch((err) => {
        console.log("Failed to connect the database error: ", err);
    });
