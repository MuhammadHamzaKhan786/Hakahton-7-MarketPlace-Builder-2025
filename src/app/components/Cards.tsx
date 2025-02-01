
"use client";

import { RiPokerHeartsLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { FaGasPump } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { TbSteeringWheel } from "react-icons/tb";



interface cardItems {
  tittle: string;
  Usertext: number;
  Number: number;
  image: string;
  oldPrice?: string;
  newPrice?: string;
  redHeart?: React.JSX.Element;
  model?: string;
}
const Cards = ({
  tittle,
  Usertext,
  Number,
  image,
  newPrice,
  oldPrice,
  model = "Sport",
  redHeart = (
    <RiPokerHeartsLine className="text-3xl text-[#90A3BF] cursor-pointer" />
  ),
}: cardItems) => {
  return (
    <div>
      <div className="flex flex-col place-content-between transform transition duration-500 hover:scale-105
       p-5 border-5 bg-white shadow-xl border-gray-500 
      w-[327px] h-[240px] md:h-auto lg:w-[317px] lg:h-[388px]">
       
          

        <div className="flex justify-between  ">
          <div className="flex-col">
            <h1 className="text-[16px] leading-[24px] lg:text-[20px] text-[#1A202C] lg:leading-[30px] tracking-[-2%] font-bold">
              {tittle}
            </h1>
            <p className=" text-[12px] leadinh-[15.12px] text-[#90A3BF] lg:text-[14px] lg:leading-[21px] tracking-[-2%] font-bold">
              {model}
            </p>
          </div>

          <div className="w-[16px] h-[16px] lg:w[24px] lg:h-[24px]">{redHeart}</div>
        </div>
              
              <div className=" flex flex-row md:flex-col gap-10 ">
                <div>
                <Image src={image} alt="car" width={256} height={196}
                />
                </div>
      

        
        <div className=" flex flex-col lg:flex-row  gap-3 lg:gap-8 w-[70px] h-[74px] lg:[256px] lg:h-[74px]">
          <div className="flex gap-2">
          <FaGasPump 
          className=" w-[14px] h-[14px] lg:h-6 lg:w-6 text-[#90A3BF]"/>
            <span className="text-[12px] leading-[15.12px] lg:text-[14px] lg:leading-[21px]">{Number}OL</span>
          </div>

          <div className="flex  gap-2">
          <TbSteeringWheel
            className=" w-[14px] h-[14px] lg:h-6 lg:w-6 text-[#90A3BF]"/>
           <span className="text-[12px] leading-[15.12px] lg:text-[14px] lg:leading-[21px]">Manual</span>
            </div>

            <div className="flex  gap-2">
            <FaUserGroup 
          className=" w-[14px] h-[14px] lg:h-6 lg:w-6 text-[#90A3BF]"/>
             <span className="text-[12px] leading-[15.12px] lg:text-[14px] lg:leading-[21px]">{Usertext}people</span>
            </div>

          </div>

          </div>

      

        
           
        <div className="flex justify-between ">
          <div>
            <span className="text-[16px] leading:[20.16px] tracking-[-1%] lg:text-[20px] font-bold lg:leading-[25.2px] text-[#1A202C]">
              {newPrice} /
            </span>
            <span className="text-[14px]">day</span>
            <h3 className="text-[12px] leding-[15.12px] line-through lg:text-[14px]">{oldPrice}</h3>
          </div>
          <div>
          <Link href="/Payment">
            <button className="bg-[#3563E9] hover:scale-110 transition-transform duration-200 hover:bg-[#213c8f]
            w-[100px] h-[36px] lg:w-[140px] lg:h-[56px]  text-white   px-3 py-2 text-[16px] leading-[24px]">
              Rent Now
            </button>
          </Link>
          </div>
    
        </div>
      </div>
      </div>

  );
};

export default Cards;
