import { Router } from "express";
import { addTransaction, getTransactions } from "../controllers/transaction.js";
import { asyncHandler } from "../lib/asyncHandler.js";

const router = Router();

router.get("/", asyncHandler(getTransactions));
router.post("/", asyncHandler(addTransaction));

export const transactionRouter = router;
