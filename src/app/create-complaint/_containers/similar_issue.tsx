import Link from 'next/link';

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
                <div className="flex min-w-0">
                    <div className="min-w-0 flex-auto ml-4">
                        {/* <p className="text-sm font-semibold leading-6 text-gray-900">Similarity</p> */}
                        <p className="text-sm font-semibold leading-6 text-gray-900">Title</p>
                    </div>
                    <div className='min-w-1 mr-8'>
                        <p className="text-sm font-semibold leading-6 text-gray-900">&nbsp;&nbsp;Status</p>
                    </div>
                </div>

                {solved_complaint.map((person) => (
                    <Link key={person.name} href={`./complaint-detail/${person.caseID}`}>
                    <div key={person.name} className="flex w-full justify-between py-5">
                    {/* <img alt="" src={person.imageUrl} className="h-10 w-12 flex-none rounded-full bg-gray-50" /> */}
                    {/* <p className="text-sm font-semibold leading-6 text-gray-900">{person.similarity}</p> */}
                        <div className="min-w-0 max-w-60 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900 hover:font-bold">{person.name}</p>
                            {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.caseID}</p> */}
                            <p className="mt-1 truncate text-xs leading-5 text-gray-700 break-words">{person.summaryDetails}</p>
                        </div>
                        <div className='min-w-1 mr-6'>
                            <p
                                className="text-sm leading-6 font-medium"
                                style={{ color: person.status === 'Resolved' ? '#22C55E' : '#FF0000' }} // Adjust for your desired red
                            >
                                {person.status}
                            </p>
                        </div>
                    {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        View
                        </button>
                        </div> */}
                    </div>
                    </Link>
                ))}
            </ul>


        </div>
    );
}