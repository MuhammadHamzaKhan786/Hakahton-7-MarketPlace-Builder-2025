'use client'
import React, { useState } from "react";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Prevents the default form submit action
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    setError("");
    onLogin();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded mb-3"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded mb-4"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

const UserDashboard = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-2/3">
        <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">User Dashboard</h2>
          <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
        </div>
        <div className="flex">
          <div className="w-1/4 bg-gray-200 p-4">
            <ul>
              <li className="mb-2 p-2 hover:bg-gray-300 cursor-pointer">Overview</li>
              <li className="mb-2 p-2 bg-blue-500 text-white rounded">Order History</li>
              <li className="p-2 hover:bg-gray-300 cursor-pointer">Profile</li>
            </ul>
          </div>
          <div className="w-3/4 p-6">
            <h3 className="text-lg font-semibold">Order History</h3>
            <p className="text-gray-500">No order history available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <UserDashboard onLogout={() => setIsLoggedIn(false)} /> : <Login onLogin={() => setIsLoggedIn(true)} />;
};

export default App;
