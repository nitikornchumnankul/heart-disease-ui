"use client"
import { useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-between w-full p-4 bg-gradient-to-r from-[#6D6E70] to-[#F26522] relative">
      <Image src="/SUT_logo.png" alt="Sut logo" height={100} width={200} />
      <div className="flex items-center gap-4">
        <p className="text-white text-xl">Admin</p>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex justify-center items-center rounded-full bg-orange-600 focus:outline-none"
          >
            <Image src="/CEO.png" alt="Profile" width={40} height={40} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              <Link href="/UploadImage" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Upload Image
              </Link>
              <Link href="/PatientDetails" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Patient Details
              </Link>
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
