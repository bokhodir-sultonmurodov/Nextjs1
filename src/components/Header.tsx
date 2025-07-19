import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Dummy json</h2>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 font-medium hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/product" className="text-gray-700 font-medium hover:text-black transition-colors">
            Products
          </Link>
          <Link href="/recipe" className="text-gray-700 font-medium hover:text-black transition-colors">
            Recipes
          </Link>
          <Link href="/user" className="text-gray-700 font-medium hover:text-black transition-colors">
            Users
          </Link>
          <Link href="/post" className="text-gray-700 font-medium hover:text-black transition-colors">
            Posts
          </Link>
          <Link href="/login" className="text-gray-700 font-medium hover:text-black transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
