import React from 'react';

const ComplaintProcess = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="relative flex justify-between items-center">

        {/* Horizontal Line */}
        <div className="absolute inset-x-0 top-5 z-0">
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Step 1: Write Report */}
        <div className="relative text-center w-1/5 px-2">
          <div className="flex justify-center mb-4 z-10"> {/* Added z-10 to bring the icon above the line */}
            <div className="bg-blue-400 text-white p-4 rounded-full">
              <PencilLogo className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-md">Write a Report</h3>
          <p className="text-gray-500 text-xs leading-tight">Report your complaint or aspiration clearly and completely.</p>
        </div>

        {/* Step 2: Verification Process */}
        <div className="relative text-center w-1/5 px-2">
          <div className="flex justify-center mb-4 z-10">
            <div className="bg-white text-black p-4 border border-gray-300 rounded-full">
              <VerificationLogo className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-md">Verification Process</h3>
          <p className="text-gray-500 text-xs leading-tight">Within 3 days, your report will be verified and forwarded to the relevant agency.</p>
        </div>

        {/* Step 3: Follow-up Process */}
        <div className="relative text-center w-1/5 px-2">
          <div className="flex justify-center mb-4 z-10">
            <div className="bg-white text-black border border-gray-300 p-4 rounded-full">
              <FollowupIcon className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-md">Follow-up Process</h3>
          <p className="text-gray-500 text-xs leading-tight">Within 5 days, the agency will follow up and respond to your report.</p>
        </div>

        {/* Step 4: Give Response */}
        <div className="relative text-center w-1/5 px-2">
          <div className="flex justify-center mb-4 z-10">
            <div className="bg-white text-black border border-gray-300 p-4 rounded-full">
              <ResponseLogo className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-md">Give Response</h3>
          <p className="text-gray-500 text-xs leading-tight">You can respond to the reply given by the agency within 10 days.</p>
        </div>

        {/* Step 5: Completed */}
        <div className="relative text-center w-1/5 px-2">
          <div className="flex justify-center mb-4 z-10">
            <div className="bg-green-500 text-white p-4 rounded-full">
              <CompletedLogo className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-md">Completed</h3>
          <p className="text-gray-500 text-xs leading-tight">Your report will continue to be processed until it is resolved.</p>
        </div>

      </div>
    </div>
  );
};

export default ComplaintProcess;

// Logo
const PencilLogo = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
    );
};

const VerificationLogo = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      );
};

const FollowupIcon = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
    );
};

const ResponseLogo = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
    );
};

const CompletedLogo = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    );
};
