"use client";

// import Breadcrumb from "@/components/breadcrumb";
import Link from "next/link";
import React, { useEffect } from "react";

const ComplaintSuccess = () => {
    // Disable scrolling when the component is mounted
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = ""; // Re-enable scrolling when component unmounts
        };
    }, []);

    return (
        <>
            {/* <div className="p-5">
                <Breadcrumb />
            </div> */}
            
            <div className="flex flex-col items-center justify-center h-[70vh] overflow-hidden">
                {/* Success Icon */}
                <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                        <svg
                            className="w-10 h-10 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                    We have received your complaint.
                </h1>
                <p className="text-gray-500 mb-2">
                    We will take around 1 to 3 days for complaint’s investigation.
                </p>
                <p className="text-gray-500 mb-8">
                    Thank you for your contribution.
                </p>

                {/* Back to Home Button */}
                <Link href="/user-dashboard">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                        Back To Home
                    </button>
                </Link>
            </div>
        </>
    );
};

export default ComplaintSuccess;
