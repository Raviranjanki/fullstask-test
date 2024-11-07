import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { transactionLoader } from "./App.jsx";
import "./index.css";
import Transaction, { addTransactionAction } from "./pages/AddTransaction.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        loader: transactionLoader,
        errorElement: <Error />,
        element: <App />,
    },
    {
        path: "new-transaction",
        action: addTransactionAction,
        errorElement: <Error />,
        element: <Transaction />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
