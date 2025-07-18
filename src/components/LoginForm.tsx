'use client';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-5 text-center">Welcome back</h2>
        
        <form  className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition font-medium"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
