export type ComplatDetailType = {
    ID: string;
    title: string; // Added title here
    name: string;
    issued_date: string;
    agency_assigned: string;
    complaint_details: string;
    status: string;
    status_update_date: string;
    resolution_time: string;
    attachment: {
        name: string;
        size: string;
    }[];
    remarks: string;
}

const dummyData: ComplatDetailType[] = [
    {
        ID: '101',
        title: 'Noise Complaint: Construction Site', // Added title
        name: 'John Doe',
        issued_date: 'June 1, 2024',
        agency_assigned: 'Construction Department',
        complaint_details: "Residents in the vicinity have reported persistent noise disturbances from the construction site located at 123 Main St. The noise levels, particularly during early morning hours, are affecting the quality of life and sleep of nearby residents. It is requested that construction hours be adjusted to mitigate these disturbances.",
        status: 'Resolved',
        status_update_date: '2024-06-02',
        resolution_time: '1 day',
        attachment: [
            {
                name: 'noise_complaint_photo.jpg',
                size: '500KB'
            }
        ],
        remarks: 'The construction hours have been adjusted to mitigate noise disturbances.'
    },
    {
        ID: '102',
        title: 'Request for Streetlight Repair', // Added title
        name: 'Jane Smith',
        issued_date: 'June 21, 2024',
        agency_assigned: 'Public Works Department',
        complaint_details: "The streetlight at the intersection of 5th Avenue and Oak Street has been malfunctioning for several weeks. This has led to poor visibility at night, posing a safety risk for pedestrians and drivers alike. Immediate repair is requested to ensure public safety.",
        status: 'In Attention',
        status_update_date: '2024-06-25',
        resolution_time: 'Pending',
        attachment: [],
        remarks: 'The repair team has been notified and is expected to address the issue soon.'
    },
    {
        ID: '103',
        title: 'Pothole Issue on Main St.', // Added title
        name: 'Mark Johnson',
        issued_date: 'June 23, 2024',
        agency_assigned: 'Road Maintenance Department',
        complaint_details: "A significant pothole on Main St. has been causing damage to vehicles and posing a hazard for cyclists. Several residents have reported issues, and there is concern for the potential for accidents. Prompt action is needed to repair the pothole and ensure safe passage for all road users.",
        status: 'Rejected',
        status_update_date: '2024-06-24',
        resolution_time: 'N/A',
        attachment: [],
        remarks: 'Due to budget constraints, this issue has been classified as non-urgent.'
    },
    {
        ID: '104',
        title: 'Request for Park Maintenance', // Added title
        name: 'Emily Davis',
        issued_date: 'July 1, 2024',
        agency_assigned: 'Parks and Recreation',
        complaint_details: "The local park has seen a decline in maintenance, with broken benches, overgrown grass, and litter scattered throughout the area. This has made it less enjoyable for families and children who frequent the park. It is requested that the maintenance team address these issues to restore the park to a safe and pleasant state.",
        status: 'Under Investigation',
        status_update_date: '2024-07-05',
        resolution_time: 'Pending',
        attachment: [],
        remarks: 'A maintenance request has been submitted and is currently under review.'
    },
    {
        ID: '105',
        title: 'Illegal Dumping Report', // Added title
        name: 'Michael Brown',
        issued_date: 'July 5, 2024',
        agency_assigned: 'Environmental Services',
        complaint_details: "Residents have observed illegal dumping occurring in the alley behind the community center. The dumped materials include hazardous waste and construction debris, which pose health and safety risks. Quick removal and increased surveillance in the area are necessary to prevent further incidents.",
        status: 'Resolved',
        status_update_date: '2024-07-06',
        resolution_time: '1 day',
        attachment: [
            {
                name: 'illegal_dumping_photo.jpg',
                size: '700KB'
            }
        ],
        remarks: 'The dumped materials were removed, and surveillance has been increased to prevent further incidents.'
    },
    {
        ID: '106',
        title: 'Complaint About Traffic Signal Malfunction', // Added title
        name: 'Sarah Wilson',
        issued_date: 'July 10, 2024',
        agency_assigned: 'Traffic Department',
        complaint_details: "The traffic signal at the intersection of 1st and Elm has been malfunctioning intermittently, leading to confusion and potential accidents at the busy intersection. Drivers and pedestrians are unsure when it is safe to proceed. Immediate attention to fix the signal is needed to ensure safety for all road users.",
        status: 'In Attention',
        status_update_date: '2024-07-11',
        resolution_time: 'Pending',
        attachment: [],
        remarks: 'The issue has been escalated, and a technician is scheduled to assess the situation.'
    }
];

export { dummyData };
