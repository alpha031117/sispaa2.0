import React from "react";
import ComplaintForm from "../../components/complaint_form/complaint_form";
import SimilarIssueContainer from "@/components/complaint_form/similar_issue._container";
import Breadcrumb from "@/components/breadcrumb";

const CreateComplaintPage = () => {
    // Define a shared class for all containers
    const containerClasses =
        "relative flex-1 overflow-hidden rounded-lg bg-white shadow ring-1 ring-black/5";

    return (
        <>
            {/* Reduced padding on Breadcrumb */}
            <div className="p-5">
                <Breadcrumb />
            </div>

            {/* Main content with reduced top margin */}
            <div className="flex flex-col lg:flex-row gap-4 p-5">
                {/* Complaint Form - Sharing same container style */}
                <div className="flex-grow lg:w-2/3">
                    <div className={containerClasses}>
                        <div className="px-5 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                            <ComplaintForm />
                        </div>
                    </div>
                </div>

                {/* Right column - Similar Issues and Chatbot */}
                <div className="flex-grow lg:w-1/3 flex flex-col gap-4">
                    {/* Similar Issues Container */}
                    <div className={containerClasses}>
                        <SimilarIssueContainer />
                    </div>

                    {/* Chatbot Container */}
                    <div className={containerClasses}>
                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950">
                                Chatbot
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateComplaintPage;
