import { useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react"; // free icons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-gray-300 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-tight">ShopEase</h1>

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
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Shop</a>
          <a href="#" className="hover:text-blue-600">Categories</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="relative">
            <ShoppingCart className="text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">0</span>
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
              <a href="#" className="hover:text-blue-600">Shop</a>
              <a href="#" className="hover:text-blue-600">Categories</a>
              <a href="#" className="hover:text-blue-600">About</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}


























// // <!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
// // <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
// export default function Header() {
//   return (
// <nav className="relative bg-gray-800">
//   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     <div className="relative flex h-16 items-center justify-between">
//       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//         {/* <!-- Mobile menu button--> */}
//         <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
//           <span className="absolute -inset-0.5"></span>
//           <span className="sr-only">Open main menu</span>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
//             <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
//             <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//         <div className="flex shrink-0 items-center">
//           <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
//         </div>
//         <div className="hidden sm:ml-6 sm:block">
//           <div className="flex space-x-4">
//             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
//             <a href="#" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
//             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
//             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
//             <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
//           <span className="absolute -inset-1.5"></span>
//           <span className="sr-only">View notifications</span>
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
//             <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>

//         {/* <!-- Profile dropdown --> */}
//         <el-dropdown className="relative ml-3">
//           <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//             <span className="absolute -inset-1.5"></span>
//             <span className="sr-only">Open user menu</span>
//             <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
//           </button>

//           <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</a>
//             <a href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</a>
//           </el-menu>
//         </el-dropdown>
//       </div>
//     </div>
//   </div>

//   <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
//     <div className="space-y-1 px-2 pt-2 pb-3">
//       {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
//       <a href="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
//       <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
//       <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
//       <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
//     </div>
//   </el-disclosure>
// </nav>
// );
// }
















// src/components/Header.jsx
// import { useState } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <nav className="container mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           <li><a href="#" className="hover:text-blue-600">Home</a></li>
//           <li><a href="#" className="hover:text-blue-600">About</a></li>
//           <li><a href="#" className="hover:text-blue-600">Services</a></li>
//           <li><a href="#" className="hover:text-blue-600">Contact</a></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden flex flex-col space-y-1"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="w-6 h-0.5 bg-gray-700"></span>
//           <span className="w-6 h-0.5 bg-gray-700"></span>
//           <span className="w-6 h-0.5 bg-gray-700"></span>
//         </button>
//       </nav>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
//             <li><a href="#" className="hover:text-blue-600">Home</a></li>
//             <li><a href="#" className="hover:text-blue-600">About</a></li>
//             <li><a href="#" className="hover:text-blue-600">Services</a></li>
//             <li><a href="#" className="hover:text-blue-600">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }
