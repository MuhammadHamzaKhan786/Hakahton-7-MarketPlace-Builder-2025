import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaPaypal, FaBitcoin } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image"
import Link from "next/link"


const Payment = () => {
  return (

    <div className='mt-5 lg:mt-10 w-full h-auto container mx-w-[1440px] mx-h-[2240px] flex flex-col-reverse lg:flex-row gap-8 space-y-8 '>

    <div className="left-section w-[880px] mx-h-[2176px] h-auto shadow-lg rounded-lg space-y-8 p-7">

 {/* Billing section */}
<div className="w-[327px] h-[516px] lg:w-[852px] lg:h-auto bg-white rounded-xl shadow-md p-6 lg:p-8">
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="text-xl font-bold text-gray-800">Billing Info</h2>
      <p className="text-sm font-medium text-gray-500">Please enter your billing info</p>
    </div>
    <p className="text-sm text-gray-500">Step 1 of 4</p>
  </div>

  {/* Input Fields */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
      <input
        type="text"
        placeholder="Your name"
        className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
      <input
        type="text"
        placeholder="Phone number"
        className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
      <input
        type="text"
        placeholder="Address"
        className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Town / City</label>
      <input
        type="text"
        placeholder="Town or city"
        className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
</div>


   {/* Rental info */}
<div className="w-[327px] h-[816px] lg:w-[852px] lg:h-auto bg-white rounded-xl shadow-md p-6 lg:p-8">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
    <div>
      <h2 className="text-xl font-bold text-gray-800">Rental Info</h2>
      <p className="text-sm font-medium text-gray-500">Please select your rental date</p>
    </div>
    <p className="text-sm text-gray-500 mt-4 lg:mt-0">Step 2 of 4</p>
  </div>

  {/* Pick-Up Section */}
  <div className="mb-6">
    <div className="flex items-center mb-4">
      <input
        type="radio"
        name="rental-type"
        className="w-4 h-4 text-blue-500 focus:ring-0"
        checked
        readOnly
      />
      <label className="ml-3 text-sm font-medium text-gray-800">Pick – Up</label>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Locations */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Locations</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Select your city"
            className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Select your date"
            className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Select your time"
            className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>
    </div>
  
      </div>

      {/* Drop-Off Section */}
<div>
  <div className="flex items-center mb-4">
    <input
      type="radio"
      name="rental-type"
      className="w-4 h-4 text-blue-500 focus:ring-0"
    />
    <label className="ml-3 text-sm font-medium text-gray-800">Drop – Off</label>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Locations</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Select your city"
          className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Select your date"
          className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
      <div className="relative">
        <input
          type="text"
          placeholder="Select your time"
          className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  </div>
</div>
</div>
{/* Payment section */}

    <div className="w-[327px] mx-h-[732px] md:w-full md:h-auto lg:w-[852px] lg:h-[596px] bg-white rounded-xl shadow-md p-8">
      
      <div className="flex  justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
          <p className="text-sm font-medium text-gray-500">Please enter your payment method</p>
        </div>
        <p className="text-sm text-gray-500">Step 3 of 4</p>
      </div>

      {/* Credit Card Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex  lg:flex-row items-center">
            <input
              type="radio"
              name="payment-method"
              className="w-4 h-4 text-blue-500 focus:ring-0"
              checked
              readOnly
            />
            
            <label className="font-bold ml-3 text-sm font-medium text-gray-800">Credit Card</label>
          </div>
          <div className="flex gap-2">
           
            <img
             className="h-4 w-16" src={'/images/visa.png'} alt="visa-icon" width={100} height={100} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              placeholder="Card number"
              className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
            <input
              type="text"
              placeholder="DD / MM / YY"
              className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
            <input
              type="text"
              placeholder="Card holder"
              className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* CVC */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
            <input
              type="text"
              placeholder="CVC"
              className="w-full h-12 px-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* PayPal Section */}
      <div className="flex items-center justify-between bg-gray-50 p-6 rounded-lg mb-4">
        <div className="flex items-center">
          <input
            type="radio"
            name="payment-method"
            className="w-4 h-4 text-blue-500 focus:ring-0"
          />
          <label className="ml-3 text-sm font-medium text-gray-800">PayPal</label>
        </div>
        <FaPaypal className="text-blue-500 text-2xl" />
      </div>

      {/* Bitcoin Account */}
      <div className="flex items-center justify-between bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center">
          <input
            type="radio"
            name="payment-method"
            className="w-4 h-4 text-blue-500 focus:ring-0"
          />
          <label className="ml-3 text-sm font-medium text-gray-800">Bitcoin</label>
        </div>
        <FaBitcoin className="text-orange-500 text-2xl" />
      </div>

      </div>



    {/* confirmation  section*/}


    <div className="w-[327px] mx-h-[476px] lg:w-[852px] lg:h-[484px] bg-[#FFFFFF] rounded-lg shadow-lg p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[24px] font-bold text-[#1A202C]">Confirmation</h2>
          <p className="text-[16px] text-[#90A3BF] font-medium">
            We are getting to the end. Just a few clicks and your rental is ready!
          </p>
        </div>
        <span className="text-[#90A3BF] texty-12px] lg:text-[16px] font-medium">Step 4 of 4</span>
      </div>

      {/* Terms and conditions */}
      <div className="space-y-4 mb-8 text-base font-semibold text-[#1F2544]">
        <label className="flex items-center bg-[#F6F7F9] p-4 rounded-lg cursor-pointer">
          <input type="checkbox" className="form-checkbox w-5 h-5 border-[#90A3BF] mr-4" />
          <span className="text-[#1A202C] text-[16px]">
            I agree with sending marketing and newsletter emails. No spam, promised!
          </span>
        </label>
        <label className="flex items-center bg-[#F6F7F9] p-4 rounded-lg cursor-pointer">
          <input type="checkbox" className="form-checkbox w-5 h-5 border-[#90A3BF] mr-4" />
          <span className="text-[#1A202C] text-[16px]">
            I agree with our terms and conditions and privacy policy.
          </span>
        </label>
      </div>

      {/*Security Info */}
      <div className="flex flex-col items-start gap-4">
        <Link href="/confirm"><button className="w-[116px] h-[48px] bg-[#3563E9] text-white text-[16px] font-medium rounded-lg hover:bg-[#274bb8] mb-4">
          Rent Now 
        </button>
        </Link>
        <div className="flex items-center gap-4">
          <BsShieldCheck className="text-[#1A202C] text-[24px]" />
          <div>
            <h3 className="text-[#1A202C] font-semibold text-base">All your data are safe</h3>
            <p className="text-[#90A3BF] text-[14px] font-medium">
              We are using the most advanced security to provide you the best experience ever.
            </p>
          </div>
        </div>
      </div>
    </div>






      </div>
                    {/* Rental Card Summary */}

     <div className="right-section mx-10 w-full max-w-[327px] lg:max-w-[492px] lg:h-[560px] bg-white rounded-lg shadow-lg p-4 sm:p-6">
  <div className="mb-4 lg:mb-6">
    <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1A202C]">Rental Summary</h2>
    <p className="text-[12px] sm:text-[14px] text-[#90A3BF] font-medium">
      Prices may change depending on the length of the rental and the price of your rental car.
    </p>
  </div>

  <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 lg:mb-6">
    <div className="w-[96px] h-[72px] bg-[#3563E9] rounded-lg flex justify-center items-center">
    <Image className="size-28" src={'/images/bgwithcar.png'} alt="car-img" width={100} height={100} />
    </div>
    <div className="text-center sm:text-left">
      <h3 className="text-[20px] sm:text-[28px] font-bold text-[#1A202C]">Nissan GT-R</h3>
      <div className="flex items-center justify-center sm:justify-start text-[#FFCC00] text-[14px] sm:text-[16px]">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <span className="text-[#90A3BF] text-[12px] sm:text-[14px] ml-2">440+ Reviewer</span>
      </div>
    </div>
  </div>

  <div className="mb-4 lg:mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">Subtotal</span>
      <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">$80.00</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-[14px] sm:text-[16px] font-medium text-[#90A3BF]">Tax</span>
      <span className="text-[14px] sm:text-[16px] font-semibold text-[#1A202C] mr-10">$0</span>
    </div>
  </div>

  {/* Promo Code Section */}
  <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row items-center gap-4 lg:gap-2">
    <input
      type="text"
      placeholder="Apply promo code"
      className="flex-grow h-[40px] sm:h-[48px] bg-[#F6F7F9] rounded-lg px-4 text-[12px] sm:text-[14px] placeholder-[#90A3BF] focus:outline-none"
    />
    <Link href="/admin">
   <button className="w-full sm:w-[92px] h-[40px] sm:h-[48px]  text-black text-[14px] sm:text-[16px] font-semibold rounded-lg">
      Apply now
    </button>
    </Link>
  </div>

  {/* Total Price Section */}
  <div className="border-t border-[#EDEDED] pt-4">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-2">
      <span className="text-[16px] sm:text-[20px] font-bold text-[#1A202C]">Total Rental Price</span>
      <span className="text-[20px] sm:text-[24px] font-bold text-[#3563E9]">$80.00</span>
    </div>
    <p className="text-[12px] sm:text-[14px] text-[#90A3BF] text-center sm:text-left">
      Overall price and includes rental discount
    </p>
  </div>
</div>


    </div>

    
  )
}

export default Payment