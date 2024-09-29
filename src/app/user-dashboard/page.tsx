// import Image from 'next/image';
import DarkGlassBiroImage from '@/components/darkGlassBiroImage';
import DashboardA from './_components/dashboardA';
import DashboardB from './_components/dashboardB';

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center gap-y-16'>
      <DarkGlassBiroImage />
      <div className='lato-bold text-3xl'>
        Welcome back, User
      </div>
      <div>
        <DashboardA />
      </div>
      <div>
        <DashboardB />
      </div>
    </div>
  );
}