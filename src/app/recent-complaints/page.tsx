import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/breadcrumb';
import StatusCard from './_components/status_cards';
import ComplaintList from './_components/complaint_list';

const ComplaintListPage = () => {
    return (
        <>
            <div className="p-5">
                <Breadcrumb />
            </div>

            <div className="p-6 min-h-screen">
                {/* Status Cards */}
                <StatusCard />

                {/* Filter and Search Bar */}
                <div className="flex justify-end items-center mb-8 gap-4">
                    <div className="flex space-x-4">
                        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 text-black rounded-md w-1/2 hover:bg-gray-300 transition duration-200">
                            <FilterIcon className="w-5 h-5 mr-2" />
                            Filter
                        </button>
                        <button className="flex items-center px-4 py-2 bg-accent_blue text-white rounded-md w-1/2 hover:bg-blue-800 transition duration-200">
                            <SortIcon className="w-5 h-5 mr-2" />
                            Sort
                        </button>
                    </div>

                    {/* Search Input with Icon */}
                    <div className="relative w-1/4">
                        <SearchIcon className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Enter Case ID ..."
                            className="pl-10 px-4 py-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                </div>

                {/* Complaint Cases List */}
                <ComplaintList />
            </div>
        </>
    );
};

export default ComplaintListPage;

const SearchIcon = ({ className }: { className: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    );
};

const FilterIcon = ({ className }: { className: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>
    );
};

const SortIcon = ({ className }: { className: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
    );
};
