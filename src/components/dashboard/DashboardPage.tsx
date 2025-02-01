import React from 'react'
import { FaHome, FaCar, FaChartBar, FaEnvelope, FaCalendarAlt, FaCog, FaQuestionCircle } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image"


const Dashboard = () => {
  return (
    <div className='mt-5 lg:mt-10 w-full md:w-[1440px] h-auto md:h-[900px] md:flex md:gap-5 items-center justify-between  space-y-4 px-6 flex-wrap md:justify-center bg-[#F6F7F9] '>
        {/* side Menue */}
<div className='side-menue'>


    <div className="bg-[#FFFFFF] w-full h-full md:w-[286px] md:h-[900px] flex flex-col px-6 py-8">
  
      <div>
        <h2 className="text-[16px] font-semibold text-[#94A7CB] opacity-40 mb-4">MAIN MENU</h2>
        <ul className="space-y-8 font-medium text-base text-[#94A7CB]">
          <li className=" flex items-center gap-4 bg-[#3563E9] px-4 py-2 rounded-md">
            <FaHome  className='text-white'/>
            <span className='text-white'>Dashboard</span>
          </li>
          <li className=" flex items-center gap-4 hover:bg-[#3563E9] px-4 py-2 rounded-md">
            <FaCar   className='hover:text-white'/>
            <span className='hover:text-white'>Car Rent</span>
          </li>
          <li className=" flex items-center gap-4 hover:bg-[#3563E9] px-4 py-2 rounded-md">
            <FaChartBar   className='hover:text-white'/>
            <span  className='hover:text-white'>Insight</span>
          </li>
          <li className=" flex items-center gap-4 hover:bg-[#3563E9] px-4 py-2 rounded-md">
            <FaEnvelope  className='hover:text-white' />
            <span  className='hover:text-white'>Inbox</span>
          </li>
          <li className=" flex items-center gap-4 hover:bg-[#3563E9] px-4 py-2 rounded-md">
            <FaCalendarAlt  className='hover:text-white'/>
            <span  className='hover:text-white'>Calendar</span>
          </li>
        </ul>
      </div>

      {/* Preferences */}
      <div className="mt-10">
        <h2 className="text-xs font-semibold  text-[#94A7CB] opacity-40 mb-4">PREFERENCES</h2>
        <ul className="space-y-8 font-medium text-base text-[#94A7CB]">
          <li className="flex items-center gap-4 hover:text-[#3B82F6]">
            <FaCog />
            <span>Settings</span>
          </li>
          <li className="flex items-center gap-4 hover:text-[#3B82F6]">
            <FaQuestionCircle />
            <span>Help & Center</span>
          </li>
          <li className="flex items-center justify-between hover:text-[#3B82F6]">
            <div className="flex items-center gap-4">
              <BsMoonFill />
              <span>Dark Mode</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-[#3B82F6] w-4 h-4 rounded-full"></div>
              <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
            </div>
          </li>
        </ul>
      </div>

      {/* Log Out  */}
      <div className="mt-auto">
        <button className="flex items-center gap-2 text-[#94A7CB] hover:text-[#3B82F6]">
        <CiLogout />
          <span>Log Out</span>
        </button>
      </div>
     </div>
</div> 

{/* mid section  */}
<div className="bg-white w-full h-auto md:w-[534px] md:h-[836px] rounded-lg shadow-md p-3">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Details Rental</h2>
      </div>

      {/* Map Section */}
        <Image
          src="/Assets/Maps.png"
          alt="Car"
          width={486}
          height={272}
          className="w-full h-auto md:w-[446px] md:h-[272x] lg:ml-[24px]"
        />

      {/* Car Info Section */}
      <div className="flex items-center gap-4 w-full space-y-4 h-full md:w-[132px] md:h-[72px] mb-6">
        <Image
          src="/Assets/Look.png"
          alt="Car"
          width={132}
          height={72}
          className="w-[116px] h-[40px] rounded-lg bg-blue-200"
        />
        <div>
          <h3 className="text-lg mt-10 font-semibold text-[#1A202C]">Nissan GT – R</h3>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
        <span className="ml-auto text-gray-500 font-medium">#9761</span>
      </div>

      {/* Pick-Up and Drop-Off Section */}
      <div className="space-y-6 mb-6">
      <div className='mt-10 flex flex-col gap-2 justify-between mr-3 mb-10'>
      

      <div className="w-full h-full md:w-[510px] md:h-[136px] bg-white px-4 py-4 rounded-lg shadow-xl p-6">
      <div className='flex gap-3'>
      <div className='rounded-full bg-blue-300 w-4 h-4 p-1 mt-[5px]'>
        <div className='rounded-full bg-blue-600 w-2 h-2'></div>
      </div>
<h3 className="text-xl font-semibold text-gray-800 text-center">Pick-Up</h3>
          
      </div>
      
<div className="mt-5 flex justify-between">
  {/* <!-- Location --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Locations</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-bold tracking-[-2%] text-[#90A3BF] '>Select your city</p>
  <IoIosArrowDown />
  </div>
  </div>
   

  {/* Date  */}
   <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Date</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Date</p>
  <IoIosArrowDown />
  </div>
  </div  >
   
  {/* Time */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Time</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Time</p>
  <IoIosArrowDown />
  </div>
  </div>
</div>
</div>
{/* Drop-off secion */}

<div className="w-full h-full md:w-[510px] md:h-[136px]  bg-white px-4 py-4 rounded-lg shadow-lg p-6">
      <div className='flex gap-3'>
      <div className='rounded-full bg-sky-300 w-4 h-4 p-1 mt-[5px]'>
        <div className='rounded-full bg-sky-500 w-2 h-2'></div>
      </div>
<h3 className="text-xl font-semibold text-gray-800 text-center">Day-Off</h3>
          
      </div>
       
<div className="mt-5 flex justify-between">
  {/* <!-- Location --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Locations</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-bold tracking-[-2%] text-[#90A3BF] '>Select your city</p>
  <IoIosArrowDown />
  </div>
  </div>
   

  {/* <!-- Date --> */}
   <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Date</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Date</p>
  <IoIosArrowDown />
  </div>
  </div  >
   
  {/* <!-- Time --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Time</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Time</p>
  <IoIosArrowDown />
  </div>
  </div>
</div>
</div>

</div>
</div>
        
{/* Total Rental Price */}
      <div className="border-t ">
        <div className='flex  relative flex-col'><h4 className="text-sm text-[#1A202C] mb-2">Total Rental Price</h4>
        
        <p className="text-sm text-gray-500">Overall price and includes rental discount</p>
        <p className="absolute bottom-5 right-4 flex text-2xl font-semibold text-[#1A202C]">$80.00</p></div>
        
      </div>
    </div>

   


   


 <div className='right-section'>
 <div className=" bg-white w-full h-auto md:w-[524px]  md:h-[324px] rounded-lg shadow-md p-6">
      <Image src="/Assets/rentalFrame.png" alt="rental-image" width={524} height={324}/>
</div>
<div><div className="w-full h-auto md:w-[524px] md:h-[480px] bg-white rounded-xl shadow-md p-6">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold text-gray-800">Recent Transaction</h2>
    <a href="#" className="text-sm text-blue-500 hover:underline">
      View All
    </a>
  </div>
  {/* Transactions */}
  <ul>
    {/* Transaction 1 */}
    <li className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none">
      <div className="md:md:flex items-center">
        <img
          src="/Assets/car (19).png"
          alt="Nissan GT – R"
          className= "w-full h-auto md:w-[114px] md:h-[36px] rounded-md object-cover mr-4"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">Nissan GT – R</p>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">20 July</p>
        <p className="text-sm font-medium text-gray-800">$80.00</p>
      </div>
    </li>
    {/* Transaction 2 */}
    <li className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none">
      <div className="md:flex items-center">
        <img
          src="/Assets/Car (20).png"
          alt="Koenigsegg"
          className="w-full h-auto md:w-[114px] md:h-[36px] rounded-md object-cover mr-4"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">Koenigsegg</p>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">19 July</p>
        <p className="text-sm font-medium text-gray-800">$99.00</p>
      </div>
    </li>
    {/* Transaction 3 */}
    <li className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none">
      <div className="md:flex items-center">
        <img
          src="/Assets/car (21).png"
          alt="Rolls – Royce"
          className="w-full h-auto md:w-[114px] md:h-[36px] rounded-md object-cover mr-4"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">Rolls – Royce</p>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">18 July</p>
        <p className="text-sm font-medium text-gray-800">$96.00</p>
      </div>
    </li>
    {/* Transaction 4 */}
    <li className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none">
      <div className="md:flex items-center">
        <img
          src="/Assets/car (22).png"
          alt="CR - V"
          className="w-full h-auto md:w-[114px] md:h-[36px] rounded-md object-cover mr-4"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">CR - V</p>
          <p className="text-sm text-gray-500">SUV</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">17 July</p>
        <p className="text-sm font-medium text-gray-800">$80.00</p>
      </div>
    </li>
  </ul>
</div>
</div>
 </div>
  
</div>
    
  )
}

export default Dashboard