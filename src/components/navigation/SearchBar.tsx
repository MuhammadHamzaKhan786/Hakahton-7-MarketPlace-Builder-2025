

'use client'
import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import sanityClient from '@sanity/client';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  type: string;
  originalprice: number;
  transmission: string;
  fuelCapacity: string;
  seatingCapacity: string;
  pricePerDay: number;
  imageUrl: string;
}

const client = sanityClient({
  projectId: 'kpy3htu1',
  dataset: 'production',
  useCdn: true,
});

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        name,
        type,
        originalprice,
        transmission,
        fuelCapacity,
        seatingCapacity,
        pricePerDay,
        "imageUrl": image.asset->url
      }`;

      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <div className="center relative ml-40 md:ml-0 flex items-center gap-4  md:mr-10 mr-40    md:w-[492px] h-[48px] border-[1px] border-[#C3D4E9]-white px-3 py-2 rounded-full">
      <div className="h-5 w-5 text-black-400"
      
      >
        <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.42-1.42l4.58 4.59a1 1 0 11-1.42 1.42l-4.58-4.59zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
          <input
            type="text"
            placeholder="Search something here"
             className="bg-transparent w-[200px]  lg:w-[400px] text-sm outline-none"
            
          />
         <Image
              src="/images/filter (1).png"
              alt="Filter"
              width={20}
              height={30}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            />
      </div>

      {isSearchOpen && filteredProducts.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-lg max-h-96 overflow-y-auto w-full sm:w-[300px] z-20">
          <ul className="max-h-96 overflow-y-auto">
            {filteredProducts.map((product) => (
              <li key={product._id} className="p-2 border-b hover:bg-gray-100">
                <a href={`/car/${product._id}`} className="flex items-center space-x-3">
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="w-16 h-16 sm:w-12 sm:h-12 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">{product.name}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">${product.pricePerDay}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;