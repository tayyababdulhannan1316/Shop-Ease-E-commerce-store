import React, { useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react"; // free icons
import { Link } from "react-router-dom";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-300 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-tight">
          ShopEase
        </h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/3">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm ml-2 w-full"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-600">
            Shop
          </Link>
          <Link to="/categories" className="hover:text-blue-600">
            Categories
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="relative">
            <ShoppingCart className="text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">
              0
            </span>
          </button>
          <User className="text-gray-700 hover:text-blue-600 cursor-pointer" />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="p-4">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 mb-4">
              <Search className="text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none text-sm ml-2 w-full"
              />
            </div>
            <nav className="flex flex-col space-y-2 text-gray-700 font-medium">
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
              <Link to="/shop" className="hover:text-blue-600">
                Shop
              </Link>
              <Link to="/categories" className="hover:text-blue-600">
                Categories
              </Link>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
