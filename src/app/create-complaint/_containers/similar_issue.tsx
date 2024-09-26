import Image from 'next/image';

const solved_complaint = [
    {
      name: 'Eelctric Pole Damaged',
      caseID: '1010000023456',
      summaryDetails: 'Electric pole is damaged and needs to be replaced.',
      status: 'Resolved',
      similarity: '90%',
      imageUrl: '/images/kplb.png',
    },
    {
        name: 'Eelctric Pole Damaged',
        caseID: '1010000023456',
        summaryDetails: 'Electric pole is damaged and needs to be replaced.',
        status: 'Resolved',
        similarity: '80%',
        imageUrl: '/images/kplb.png',
    },
    {
        name: 'Eelctric Pole Damaged',
        caseID: '1010000023456',
        summaryDetails: 'Electric pole is damaged and needs to be replaced.',
        status: 'Rejected',
        similarity: '70%',
        imageUrl: '/images/kplb.png',
    },
]

export default function SimilarIssueContainer() {
    return (
        <div>
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                Similar Issues
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Based on your input, here are some similar complaints that has been filed.
                </p>
            </div>
            <ul role="list" className="divide-y divide-gray-100 p-10">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        {/* <p className="text-sm font-semibold leading-6 text-gray-900">Similarity</p> */}
                        <p className="text-sm font-semibold leading-6 text-gray-900">Title</p>
                    </div>
                    <div className='min-w-1 flex-1'>
                        <p className="text-sm font-semibold leading-6 text-gray-900">&nbsp;&nbsp;Status</p>
                    </div>
                </div>

                {solved_complaint.map((person) => (
                    <li key={person.name} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        {/* <img alt="" src={person.imageUrl} className="h-10 w-12 flex-none rounded-full bg-gray-50" /> */}
                        {/* <p className="text-sm font-semibold leading-6 text-gray-900">{person.similarity}</p> */}
                        <div className="min-w-0 max-w-60 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                            {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.caseID}</p> */}
                            <p className="mt-1 truncate text-xs leading-5 text-gray-700 break-words">{person.summaryDetails}</p>
                        </div>
                        <div className='min-w-1 flex-1'>
                            <p
                                className="text-sm leading-6 font-medium"
                                style={{ color: person.status === 'Resolved' ? '#22C55E' : '#FF0000' }} // Adjust for your desired red
                            >
                                {person.status}
                            </p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            View
                        </button>
                        
                        {/* {person.lastSeen ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                            Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                        </p>
                        ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className="text-xs leading-5 text-gray-500">Online</p>
                        </div>
                        )} */}
                    </div>
                    </li>
                ))}
            </ul>


        </div>
    );
}