import { Link, useLoaderData } from "react-router-dom";
import TransactionItem from "./components/TransactionItem";

export const transactionLoader = async () => {
    const response = await fetch("http://localhost:8000/api/v1/transactions");
    const result = await response.json();
    return result;
};

function App() {
    const data = useLoaderData();

    return (
        <section className="container px-3 mx-auto">
            <div className="flex justify-between items-center py-10">
                <h2 className="font-bold text-lg lg:text-2xl">Office Transactions</h2>
                <Link
                    to="/new-transaction"
                    className="cursor-pointer bg-indigo-500 text-white py-3 px-4 rounded-md hover:bg-indigo-600"
                >
                    + Add Transactions
                </Link>
            </div>
            <table className="w-full text-left border shadow-sm rounded-md overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-6">Date</th>
                        <th className="px-4 py-6">Description</th>
                        <th className="px-4 py-6">Credit</th>
                        <th className="px-4 py-6">Debit</th>
                        <th className="px-4 py-6">Running Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((item) => (
                            <TransactionItem key={item._id} {...item} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center p-4">
                                Nothing to show...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
}

export default App;
