'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGasPump, FaCogs, FaUserFriends } from 'react-icons/fa';

type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
};

const CarRecommendationPag: React.FC = () => {
  const cars: Car[] = [
    {
      id: 1,
      name: "Haval HEV",
      price: "80.0/day",
      image: "/images/haval.png",
      type: "Hybrid",
      fuelCapacity: "30L",
      transmission: "Automatic",
      capacity: "5People",
    },
    {
      id: 2,
      name: "BMW X5",
      price: "50.0/day",
      image: "/images/bmw23.png",
      type: "Diesel",
      fuelCapacity: "55L",
      transmission: "Manual",
      capacity: "4People",
    },
    {
      id: 3,
      name: "Audi E-Tron GT",
      price: "90/day",
      image: "/images/p4.png",
      type: "Electric",
      fuelCapacity: "30KWH",
      transmission: "Automatic",
      capacity: "5People",
    },
    {
      id: 4,
      name: "Changan OSHAN X7",
      type: "Hybrid",
      image: "/images/oshanx7.png",
      fuelCapacity: "60L",
      transmission: "Automatic",
      capacity: "5People",
      price: "100/day",
    },
    {
      id: 5,
      name: "MG HS",
      type: "Gasoline",
      image: "/images/r6.png",
      fuelCapacity: "65L",
      transmission: "Automatic",
      capacity: "4People",
      price: "40/day",
    },
    {
      id: 6,
      name: "Ford Mustang",
      type: "Gasoline",
      image: "/images/hero1.png",
      fuelCapacity: "60L",
      transmission: "Automatic",
      capacity: "5People",
      price: "78/day",
    },
    {
      id: 7,
      name: "Rolls - Royce Phantom",
      type: "Electric",
      image: "/images/phantom.png",
      fuelCapacity: "50KWH",
      transmission: "Automatic",
      capacity: "4People",
      price: "95/day",
    },
    {
      id: 8,
      name: "Corolla Cross",
      type: "Hybrid",
      image: "/images/toyota1.png",
      fuelCapacity: "30L",
      transmission: "Automatic",
      capacity: "5People",
      price: "76/day",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Car Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Link key={car.id} href={`/car/${car.id}`}>
              <div className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <div className="mt-6 mb-2 text-left">
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>

                {/* Car Image */}
                <div className="w-full h-48 mb-4 relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>

                {/* Icons and Labels */}
                <div className="flex justify-between items-center text-gray-600 mb-4">
                  <p className="flex items-center text-sm">
                    <FaGasPump className="mr-2 text-blue-500" />
                    {car.fuelCapacity}
                  </p>
                  <p className="flex items-center text-sm">
                    <FaCogs className="mr-2 text-green-500" />
                    {car.transmission}
                  </p>
                  <p className="flex items-center text-sm">
                    <FaUserFriends className="mr-2 text-red-500" />
                    {car.capacity}
                  </p>
                </div>

                {/* Price and Rent Now Button */}
                <div className="flex justify-between items-center">
                  <p className="text-lg font-extrabold text-black">${car.price}</p>
                  <button className="gap-2 px-6 py-2 text-base font-normal justify-center text-center text-white bg-[#3563E9] rounded">
                    Rent Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>  
     

);
};




export default CarRecommendationPag;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaGasPump, FaCogs, FaUserFriends } from 'react-icons/fa';
// import { client } from '@/sanity/lib/client';

// type Car = {
//   id: string;
//   name: string;
//   price: string;
//   image: string; // Ensure image is always a string
//   type: string;
//   fuelCapacity: string;
//   transmission: string;
//   capacity: string;
// };

// type CarSanityData = {
//   _id: string;
//   name: string;
//   pricePerDay: string | number;
//   image?: { asset?: { url?: string } };
//   type?: string;
//   fuelCapacity?: string;
//   transmission?: string;
//   seatingCapacity?: string;
// };

// const CarRecommendationPag: React.FC = () => {
//   const [cars, setCars] = useState<Car[]>([]); // State for fetched cars
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetch data from Sanity
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const query = await client.fetch<CarSanityData[]>(
//           `*[_type == "product"][5..16] {
//             _id,
//             name,
//             "pricePerDay": pricePerDay,
//             "image": image.asset->url,
//             type,
//             "fuelCapacity": fuelCapacity,
//             transmission,
//             "seatingCapacity": seatingCapacity
//           }`
//         );

//         // Map and format data safely
//         const mappedCars: Car[] = query.map((car) => ({
//           id: car._id,
//           name: car.name || 'Unknown Car',
//           price: car.pricePerDay ? car.pricePerDay.toString() : 'N/A',
//           image: typeof car.image === 'string' ? car.image : '/fallback-image.png', // Always set as string
//           type: car.type || 'Unknown Type',
//           fuelCapacity: car.fuelCapacity || 'Unknown Capacity',
//           transmission: car.transmission || 'Unknown Transmission',
//           capacity: car.seatingCapacity || 'Unknown Seating',
//         }));

//         setCars(mappedCars); // Update state
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p className="text-center py-8">Loading car recommendations...</p>;
//   }

//   return (
//     <section className="py-8 bg-gray-100">
//       <div className="container mx-auto text-center">
//         <h2 className="text-2xl font-semibold mb-6">Car Recommendations</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cars.map((car) => (
//             <Link key={car.id} href={`/car/${car.id}`}>
//               <div className="cursor-pointer bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative">
//                 <div className="mt-6 mb-2 text-left">
//                   <h3 className="text-lg font-bold">{car.name}</h3>
//                   <p className="text-sm text-gray-500">{car.type}</p>
//                 </div>

//                 {/* Car Image */}
//                 <div className="w-full h-48 mb-4 relative">
//                   <Image
//                     src={car.image}
//                     alt={car.name}
//                     layout="fill"
//                     objectFit="contain"
//                     className="rounded-md"
//                   />
//                 </div>

//                 {/* Icons and Labels */}
//                 <div className="flex justify-between items-center text-gray-600 mb-4">
//                   <p className="flex items-center text-sm">
//                     <FaGasPump className="mr-2 text-blue-500" />
//                     {car.fuelCapacity}
//                   </p>
//                   <p className="flex items-center text-sm">
//                     <FaCogs className="mr-2 text-green-500" />
//                     {car.transmission}
//                   </p>
//                   <p className="flex items-center text-sm">
//                     <FaUserFriends className="mr-2 text-red-500" />
//                     {car.capacity}
//                   </p>
//                 </div>

//                 {/* Price and Rent Now Button */}
//                 <div className="flex justify-between items-center">
//                   <p className="text-lg font-extrabold text-black">
//                     {car.price !== 'N/A' ? `$${car.price}` : car.price}
//                   </p>
//                   <button className="gap-2 px-6 py-2 text-base font-normal justify-center text-center text-white bg-[#3563E9] rounded">
//                     Rent Now
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarRecommendationPag;