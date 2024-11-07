import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center flex-col h-screen space-y-4">
            <h2 className="text-2xl font-bold">We cound't find the page</h2>
            <Link
                to="/"
                className="border py-2 px-3 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default Error;
