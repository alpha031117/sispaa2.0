export type ComplatDetailType = {
    ID: string;
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
  

const dummyData: ComplatDetailType ={
	ID: '1',
	name: 'John Doe',
	issued_date: '2021-10-01',
	agency_assigned: 'Jabatan Keselamatan Jalan Raya',
	complaint_details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	status: 'Pending',
	status_update_date: '2021-10-02',
	resolution_time: '3 days',
	attachment: [
		{
			name: 'attachment1.jpg',
			size: '1MB'
		},
		{
			name: 'attachment2.mp4',
			size: '9MB'
		}
	],
	remarks: 'There is big serious pothole at Jalan Kuching, Kuala Lumpur. JKR authority had removed the damaged section by using binder. If you still need help with this issue after reviewing the articles, contact JKR Support for further assistance.'
}
export { dummyData };