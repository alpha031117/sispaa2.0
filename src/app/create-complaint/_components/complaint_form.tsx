'use client';

import React, { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/solid';
import MapComponent from "./mapComponent";
import Link from "next/link";

// interface TypeOption {
//     label: string;
//     color: string;
//     icon: string;
//   }

export default function CreateComplaint() {
    const placeholderPaddingClass = "placeholder:px-3"; // Custom class for placeholder padding
  
    // Define state for the selected type
    const [selectedType, setSelectedType] = useState<string>("Complaint");

    const [renderTypeSelection, setRenderTypeSelection] = useState<boolean>(false);

    // Define state for rendering the map
    const [renderMap, setRenderMap] = useState<boolean>(false);
  
    // Define complaint types array
    // const types: TypeOption[] = [
    //   { label: "Complaint", color: "bg-red-200", icon: "✏️" },
    //   { label: "Enquiry", color: "bg-blue-300", icon: "❓" },
    //   { label: "Suggestion", color: "bg-blue-300", icon: "💡" },
    //   { label: "Appreciation", color: "bg-blue-300", icon: "🫶" }
    // ];
  
    // Handle selection of complaint type
    const handleSelectType = (type: string) => {
      setSelectedType(type);
    };

    const handleRenderMapButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setRenderMap(!renderMap);
    };

    return (
        <form className="max-w-4xl mx-auto p-6">
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900">File a {selectedType}</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Please provide accurate information to ensure prompt action on your complaint.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        {/* Complaint Type */}
                        <div className="col-span-full">
                            <label htmlFor="complaint-type" className="block text-sm font-medium leading-6 text-gray-900">
                                Complaint Type
                            </label>
                            <div className="mt-2 flex flex-row justify-between gap-x-8">
                                {/* {types.map((type) => (
                                    <button
                                        key={type.label}
                                        onClick={(e) => {e.preventDefault(); handleSelectType(type.label)}}
                                        className={`${type.color} p-4 rounded-md shadow-lg flex flex-col items-center justify-center ${
                                            selectedType === type.label
                                            ? "ring-0"
                                            : "hover:ring-2 hover:scale-100 scale-75"
                                        }`}
                                    >
                                        <span className="text-sm font-medium mt-2">{type.label}</span>
                                    </button>
                                ))} */}
                                <div className="bg-rose-600 text-white border-black border flex-1 rounded-sm py-1 text-center">
                                    Complaint
                                </div>
                                <div>
                                    <button onClick={(e) => {e.preventDefault(); setRenderTypeSelection(!renderTypeSelection)}} className="border border-gray-800 bg-gray-400 rounded-sm px-4 h-full">
                                        ...
                                    </button>
                                    {renderTypeSelection && (
                                        <div className="absolute mt-2 bg-white cursor-pointer">
                                            <div className="border-black border flex-1 rounded-sm py-1 text-center" onClick={(e) => {e.preventDefault(); handleSelectType("Complaint")}}>
                                                Complaint
                                            </div>
                                            <div className="border-black border flex-1 rounded-sm py-1 text-center" onClick={(e) => {e.preventDefault(); handleSelectType("Enquiry")}}>
                                                Enquiry
                                            </div>
                                            <div className="border-black border flex-1 rounded-sm py-1 text-center" onClick={(e) => {e.preventDefault(); handleSelectType("Suggestion")}}>
                                                Suggestion
                                            </div>
                                            <div className="border-black border flex-1 rounded-sm py-1 text-center" onClick={(e) => {e.preventDefault(); handleSelectType("Appreciation")}}>
                                                Appreciation
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="col-span-full">
                            <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Enter complaint title"
                                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${placeholderPaddingClass}`}
                                />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="col-span-full">
                            <label htmlFor="details" className="block text-sm font-medium leading-6 text-gray-900">
                                Complaint Details
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="details"
                                    name="details"
                                    rows={5}
                                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${placeholderPaddingClass}`}
                                    placeholder="Describe your issue in detail..."
                                />
                            </div>
                        </div>

                        {/* Category */}
                        <div className="col-span-full">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2">
                                <select id="category" name="category" className={`block w-full rounded-md border-0 py-1.5 text-gray-400 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${placeholderPaddingClass}`}>
                                    <option value="1">Jabatan Persekutuan</option>
                                    <option value="2">Kerajaan Negeri</option>
                                </select>
                            </div>
                        </div>

                        {/* Agency */}
                        <div className="col-span-full">
                            <label htmlFor="agency" className="block text-sm font-medium leading-6 text-gray-900">
                                Agency
                            </label>
                            <div className="mt-2">
                                <select id="agency" name="agency" className={`block w-full rounded-md border-0 py-1.5 text-gray-400 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${placeholderPaddingClass}`}>
                                    <option value="">Select an agency</option>
                                    <option value="1">Jabatan Perdana Menteri</option>
                                    <option value="2">Kementerian Belia & Sukan</option>
                                    <option value="3">Kementerian Dalam Negeri</option>
                                    <option value="4">Kementerian Digital</option>
                                    <option value="5">Kementerian Ekonomi</option>
                                    <option value="6">Kementerian Pendidikan Malaysia</option>
                                    <option value="7">Kementerian Pendidikan</option>
                                    <option value="8">Kementerian Pengangkutan</option>
                                    <option value="9">Kementerian Kewangan</option>
                                    <option value="10">Kementerian Komunikasi</option>
                                    <option value="11">Kementerian Sumber Manusia</option>
                                    <option value="12">Kementerian Pertanian</option>
                                    <option value="13">Kementerian Sumber Asli</option>
                                    <option value="14">Kementerian Perpaduan Negara</option>
                                </select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="col-span-full">
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                Location
                            </label>
                            <div className="mt-2 flex flex-row gap-x-8">
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    placeholder="Enter location"
                                    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 ${placeholderPaddingClass}`}
                                />
                                <button onClick={(e) => handleRenderMapButton(e)} className="bg-accent_blue px-4 rounded-md text-white hover:bg-blue-500">
                                    Map
                                </button>
                            </div>
                            {renderMap && (
                                <div>
                                    <MapComponent />
                                </div>
                            )}
                        </div>

                        {/* Upload section */}
                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                Attachments (Optional)
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </Link>
                    <Link
                        href="/success-complaint"
                        className="rounded-md bg-accent_blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit Complaint
                    </Link>
                </div>
            </div>
        </form>
    );
}