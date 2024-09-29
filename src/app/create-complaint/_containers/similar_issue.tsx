import Image from 'next/image';
import Link from 'next/link';

type Status = 'Resolved' | 'Rejected' | 'In Attention';

const mockData: { name: string; caseID: string; summaryDetails: string; status: Status; similarity: string; }[] = [
    {
        name: 'Noise Complaint: Construction Site',
        caseID: '101',
        summaryDetails: 'Residents reported persistent noise disturbances from the construction site at 123 Main St.',
        status: 'Resolved',
        similarity: '90%',
    },
    {
        name: 'Request for Streetlight Repair',
        caseID: '102',
        summaryDetails: 'Streetlight at 5th Avenue has been malfunctioning for weeks.',
        status: 'In Attention',
        similarity: '80%',
    },
    {
        name: 'Pothole Issue on Main St.',
        caseID: '103',
        summaryDetails: 'Significant pothole on Main St. causing damage to vehicles.',
        status: 'Rejected',
        similarity: '70%',
    },
];

const statusColors = {
    Resolved: '#22C55E',
    Rejected: '#FF0000',
    'In Attention': '#3B82F6',
};

export default function SimilarIssueContainer() {
    return (
        <div>
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Similar Issues
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Based on your input, here are some similar complaints that have been filed.
                </p>
            </div>
            <ul role="list" className="divide-y divide-gray-100 p-10">
                <div className="flex min-w-0">
                    <div className="min-w-0 flex-auto ml-4">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Title</p>
                    </div>
                    <div className='min-w-1 mr-8'>
                        <p className="text-sm font-semibold leading-6 text-gray-900">&nbsp;&nbsp;Status</p>
                    </div>
                </div>

                {mockData.map((issue) => (
                    <Link key={issue.caseID} href={`./complaint-detail/${issue.caseID}`}>
                        <div className="flex w-full justify-between py-5 ml-4">
                            <div className="min-w-0 max-w-60 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900 hover:font-bold">{issue.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-700 break-words">{issue.summaryDetails}</p>
                            </div>
                            <div className='mr-6 text-left'>
                                <p
                                    className="text-sm leading-6 font-medium"
                                    style={{ color: statusColors[issue.status] }}
                                >
                                    {issue.status}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
