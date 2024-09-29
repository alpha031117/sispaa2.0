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
import { Feed } from '../page';

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

    // Status color mapping
    const statusColors = {
        'In Attention': 'text-blue-600 bg-blue-100',
        'Under Investigation': 'text-yellow-500 bg-yellow-100',
        'Resolved': 'text-green-600 bg-green-100',
        'Rejected': 'text-red-600 bg-red-100',
    };

    return (
        <div className="p-6 mb-4 bg-white shadow-md rounded-lg">
            {/* Agency Icon and Agency Name */}
            <Link href={`./agency/${feed.agency}`}>
                <div className="flex items-center mb-3">
                    <img alt="Agency Logo" src={feed.icon} className="h-6 w-6 rounded-full bg-gray-50 mr-2" />
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
                <div className={`flex items-center px-4 py-1 rounded-full text-sm font-medium ${statusColors[feed.status as keyof typeof statusColors]}`}>
                    <TickIcon className='w-4 h-4 mr-2' /> 
                    <span>{feed.status}</span>
                </div>
                
                {/* Dropdown Select for Navigation */}
                <Select onValueChange={handleNavigate}>
                    <SelectTrigger className="w-[180px] text-blue-600 text-sm font-semibold">
                        <SelectValue placeholder="Linked Complaint" />
                    </SelectTrigger>
                    <SelectContent>
                        {feed.complaintIds.map((complaint) => (
                            <SelectItem key={complaint.ID} value={complaint.ID}>
                                {complaint.title}
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
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    );
}