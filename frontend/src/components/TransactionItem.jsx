import React from "react";
import { formatCurrency, formatDate } from "../lib/format";

const TransactionItem = ({
    amount,
    description,
    type,
    currentBalance,
    createdAt,
}) => {
    return (
        <tr className="border-b">
            <td className="p-4">{formatDate(createdAt)}</td>
            <td className="p-4">{description}</td>
            <td className="p-4">
                {type === "credit" ? formatCurrency(amount) : ""}
            </td>
            <td className="p-4">
                {type === "debit" ? formatCurrency(amount) : ""}
            </td>
            <td className="p-4">{formatCurrency(currentBalance)}</td>
        </tr>
    );
};

export default TransactionItem;
