// pages/Login.js

import Link from 'next/link';

export default function Login() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Login to Your Account</h1>
        
        <form method="POST" action="/task"> {/* Ubah sesuai kebutuhan untuk pengiriman data */}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              className="input input-bordered w-full mt-2" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Your password" 
              className="input input-bordered w-full mt-2" 
              required 
            />
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="mb-6">
            <a href='/TaskList' type="submit" className="btn btn-primary bg-blue-300 p-3 float-right text-center rounded-xl w-full">
              Login
            </a>
          </div>

          <p className="text-center text-gray-600">
            <Link href="/signup" className="text-primary hover:underline"> Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
