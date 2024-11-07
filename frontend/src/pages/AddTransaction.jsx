import React from "react";
import { Form, Link, redirect, useActionData } from "react-router-dom";

export const addTransactionAction = async ({ request }) => {
    const formData = await request.formData();

    try {
        const response = await fetch(
            "http://localhost:8000/api/v1/transactions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            return error;
        }

        return redirect("/");
    } catch (error) {
        return error;
    }
};

const AddTransaction = () => {
    const data = useActionData();

    return (
        <section className="flex justify-center items-center py-8">
            <div className="container p-6 rounded-md shadow-sm">
                <h2 className="font-bold text-2xl pb-6">New Transaction</h2>
                <p className="text-red-500 text-sm">{data?.message}</p>
                <Form method="post" className="space-y-3">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="type">Transaction type</label>
                        <select
                            name="type"
                            id="type"
                            className="border rounded-md py-2 px-3"
                        >
                            <option value="credit">Credit</option>
                            <option value="debit">Debit</option>
                        </select>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="amount">Amount</label>
                        <input
                            className="border py-2 px-3 rounded-md"
                            type="number"
                            step="0.01"
                            name="amount"
                            inputMode="decimal"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="border py-2 px-3 rounded-md"
                            name="description"
                        />
                    </div>
                    <div className="flex gap-4 place-content-end">
                        <button
                            className="py-2 px-3 border rounded-md w-24 border-indigo-500 bg-indigo-500 text-white"
                            type="submit"
                        >
                            Save
                        </button>
                        <Link
                            to="/"
                            className="py-2 px-3 border rounded-md w-24 text-center"
                        >
                            Cancel
                        </Link>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default AddTransaction;
