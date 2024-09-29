import Image from 'next/image';
import DarkGlassBiroImage from '@/components/darkGlassBiroImage';
import DashboardA from './_components/dashboardA';
import DashboardB from './_components/dashboardB';

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center gap-y-16'>
      <DarkGlassBiroImage />
      <div className='lato-bold text-3xl'>
        Welcome back, Jayden Lim
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


const BiroPageImage = () => {
  return (
    <div className='relative w-[1000px] h-[206px]'>
      <Image
        src="/images/biro_page.png"
        alt="KPLB"
        fill={true} />
    </div>
  )
}