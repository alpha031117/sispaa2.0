import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center'>
      <BiroPageImage />
      <div>
        Welcome back, User
      </div>
      <div>
        
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