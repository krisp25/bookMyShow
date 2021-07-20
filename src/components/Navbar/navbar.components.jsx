import React from "react";
import { 
    BiChevronRight, 
    BiSearch,
    BiChevronDown,
    BiMenu
} from "react-icons/bi";

// For mobile devices
const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Nagpur <BiChevronRight />
                    </span>
                </div>
                <div className="w-7 h-7">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    );
};

// For medium sized devices
const NavMd = () => {
    return (
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input 
                type="search"
                className="w-full bg-transparent border-none focu:outline-none"
                placeholder="Search for movies, event, plays, sports and Activities"
            />
        </div>
    );
};

// For Laptop or PC screens
const NavLg = () => {
    return (
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                    <img 
                        src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                        alt="logo"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch />
                    <input 
                        type="search"
                        className="w-full bg-transparent border-none focu:outline-none"
                        placeholder="Search for movies, event, plays, sports and Activities"
                    />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs flex items-center hover:text-white">
                    Nagpur <BiChevronDown />
                </span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                    Sign In
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-bms-800 p-4">
                <div className="md:hidden">
                    {/* Mobile Screens */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab Screens */}
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    {/* Large Screens */}
                    <NavLg />
                </div>
            </nav> 
        </>
    );
};

export default Navbar;