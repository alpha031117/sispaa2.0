"use client";
import Link from "next/link";
import ComplaintProcess from "./_components/complaint_process";
import { useEffect, useState } from "react";

const ReportPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [reportCount, setReportCount] = useState(0);
    const [ministriesCount, setMinistriesCount] = useState(0);
    const [agenciesCount, setAgenciesCount] = useState(0);
    const [districtsCount, setDistrictsCount] = useState(0);
    const [municipalitiesCount, setMunicipalitiesCount] = useState(0);
  
    // Final counts
    const finalReportCount = 944520;
    const finalMinistriesCount = 34;
    const finalAgenciesCount = 100;
    const finalDistrictsCount = 396;
    const finalMunicipalitiesCount = 94;
  
    useEffect(() => {
      setIsMounted(true); // Set mounted to true when the component mounts
      const animateCount = (setCount: React.Dispatch<React.SetStateAction<number>>, finalCount: number) => {
        let start = 0;
        const duration = 2000;
        const increment = finalCount / (duration / 16.66);
  
        const countUp = () => {
          start += increment;
          if (start < finalCount) {
            setCount(Math.ceil(start));
            requestAnimationFrame(countUp);
          } else {
            setCount(finalCount);
          }
        };
  
        requestAnimationFrame(countUp);
      };
  
      animateCount(setReportCount, finalReportCount);
      animateCount(setMinistriesCount, finalMinistriesCount);
      animateCount(setAgenciesCount, finalAgenciesCount);
      animateCount(setDistrictsCount, finalDistrictsCount);
      animateCount(setMunicipalitiesCount, finalMunicipalitiesCount);
    }, [finalReportCount, finalMinistriesCount, finalAgenciesCount, finalDistrictsCount, finalMunicipalitiesCount]);
  
    if (!isMounted) {
      return null; // Prevent rendering during hydration
    }
  
    return (
        <div className="min-h-screen">
          {/* Banner Section */}
          <div className="relative w-full h-48 bg-black text-white py-4">
            <div className="container mx-auto">
              <h1 className="text-4xl font-bold text-center">Banner</h1>
            </div>
          </div>
  
          {/* Login Section */}
          <div className="container mx-auto py-8 text-center">
            <p className="mb-4 text-2xl">Want to file a complaint to us?</p>
            <Link href="/user-dashboard">
              <button className="bg-accent_blue text-white text-base px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200">
                Login Now
              </button>
            </Link>
          </div>
  
          {/* Steps Section */}
          <div className="container mx-auto flex justify-center space-x-6 py-8">
            <ComplaintProcess />
          </div>
  
          {/* Report Count Section */}
          <div 
            className="text-white py-12 text-center" 
            style={{
              background: 'linear-gradient(to right, #2563EB, #3b82f6)' // Example gradient colors
            }}
          >
            <h2 className="text-5xl font-bold">Number of Submitted Report</h2>
            <p className="text-7xl font-extrabold mt-4">{reportCount.toLocaleString()}</p>
          </div>
  
          {/* Ministries, Agencies, Districts, Municipalities Section */}
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <MinistryLogo className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-4xl font-bold">{ministriesCount}</h3>
                <p className="mt-2 text-lg">Ministries</p>
              </div>
              <div>
                <AgencyLogo className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-4xl font-bold">{agenciesCount}</h3>
                <p className="mt-2 text-lg">Agencies</p>
              </div>
              <div>
                <DistrictLogo className="w-8 h-8 mx-auto mb-2" />
                <h3 className="text-4xl font-bold">{districtsCount}</h3>
                <p className="mt-2 text-lg">Districts</p>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
export default ReportPage;

const MinistryLogo = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
  );
}

const AgencyLogo = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    );
}

const DistrictLogo = ({ className }: { className: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
    );
}