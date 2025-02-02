import React from 'react';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg">
        <div className="p-6 font-bold text-lg">MAIN MENU</div>
        <ul className="space-y-4 px-4">
          <li className="hover:text-blue-500">
            <Link href="/admin">Dashboard</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/">Products</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/order/1">Orders</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/user">Users</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/category">Category</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-4">
        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded-lg text-center">
            <div className="text-gray-500">Total Revenue</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg text-center">
            <div className="text-gray-500">New Customers</div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg text-center">
            <div className="text-gray-500">Top Category</div>
            <div className="text-2xl font-bold">0</div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="font-bold text-lg">Recent Orders</div>
          <div className="mt-4 flex justify-between">
            <div className="text-gray-500">.</div>
            <div className="text-gray-500">$0.00</div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-1/5 bg-white shadow-lg flex flex-col items-center py-6">
        <img 
          src="/images/Profil.png" 
          alt="Admin" 
          className="h-20 w-20 rounded-full mb-4 object-cover"
        />
        <div className="text-lg font-bold">Admin Name</div>
        <div className="text-sm text-gray-500">Administrator</div>
        <div className="text-sm text-gray-500 mt-1">Last login: Jan 2025</div>
        <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600">Log Out</button>
      </div>
    </div>
  );
};

export default Dashboard;
