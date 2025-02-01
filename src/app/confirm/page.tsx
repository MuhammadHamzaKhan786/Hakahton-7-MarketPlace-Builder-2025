'use client';
import Link from "next/link";
const ConfirmPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Booking Confirmed</h1>
        <div className="text-center text-green-500 text-3xl mb-4">
          <span role="img" aria-label="checkmark">✔</span>
        </div>
        <p className="text-green-500 text-lg text-center">
          Your car has been successfully booked for rent! 🚗
        </p>
      
<div className='item-center mx-auto text-center mt-20'>
<Link href ="/order/1"> <button className='bg-[#3563E9] hover:bg-[#213c8f] rounded-[4px]
 text-white p-[20px] font-[600] text-[16px] mx-w-[156px] mx-h-[44px]'>
    Show My Booking
  </button>
  </Link>
</div>
      </div>
    </div>
  );
};

export default ConfirmPage;