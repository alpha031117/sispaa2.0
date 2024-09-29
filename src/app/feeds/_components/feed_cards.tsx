import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import CollapsibleText from './context_cards';
import Link from 'next/link';

interface Feed {
    title: string;
    date: string;
    agency: string;
    content: string;
    status: string;
    complaintIds: string[];
}

interface FeedCardProps {
    feed: Feed;
}

export const FeedCard: React.FC<FeedCardProps> = ({ feed }) => {
    const router = useRouter();

    const handleNavigate = useCallback((complaintId: string) => {
        if (typeof window !== 'undefined') {
            router.push(`/complaint-detail/${complaintId}`);
        }
    }, [router]);

    return (
        <div className="p-6 mb-4 bg-white shadow-md rounded-lg">
            {/* Agency Icon and Agency Name */}
            <Link href={`./agency/${feed.agency}`}>
                <div className="flex items-center mb-3">
                    <img alt="Agency Logo" src="/api/placeholder/24/24" className="h-6 w-6 rounded-full bg-gray-50 mr-2" />
                    <p className="text-gray-500 hover:text-accent_blue text-base">{feed.agency}</p>
                </div>
            </Link>
            
            {/* Title */}
            <h4 className="font-semibold text-xl mb-2">{feed.title}</h4>
            
            {/* Content */}
            <CollapsibleText content={feed.content} />

            {/* Date */}
            <p className="font-normal text-sm text-gray-500 mb-4">Issued On: {feed.date}</p>
            
            {/* Status and Dropdown Select Section */}
            <div className="flex justify-between items-center">
                {/* Status Badge */}
                <div className={`flex items-center px-4 py-1 rounded-full text-sm font-medium ${
                    feed.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>
                    <TickIcon className='w-4 h-4 mr-2' /> 
                    <span>{feed.status}</span>
                </div>
                
                {/* Dropdown Select for Navigation */}
                <Select onValueChange={handleNavigate}>
                    <SelectTrigger className="w-[180px] text-blue-600 text-sm font-semibold">
                        <SelectValue placeholder="Link Complaint ID" />
                    </SelectTrigger>
                    <SelectContent>
                        {feed.complaintIds.map((id) => (
                            <SelectItem key={id} value={id}>
                                {id}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

// TickIcon Component
const TickIcon = ({ className }: { className: string }) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}