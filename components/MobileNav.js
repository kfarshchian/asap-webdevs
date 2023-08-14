'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import "./MobileNav.scss";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <>
<div id="MobileNav">
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                      <Image
                        src="/trylogoblue.svg"
                        width={350}
                        height={150}
                        alt="ASAP WebDevs Logo"
                      />
                    </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <CloseIcon style={{color: "white"}}/>
                  ) : (
                    <MenuIcon style={{color: "white"}}/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-l text-white py-2 md:px-0 text-center border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900   md:hover:bg-transparent">
                    <Link id="pageLink" href="/About" onClick={() => setNavbar(!navbar)}> About Us</Link>
                  </li>
                  <li className="pb-6 text-l text-white py-2 px-0 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900  md:hover:bg-transparent">
                    <Link id="pageLink" href="/Our-Work" onClick={() => setNavbar(!navbar)}>Our Work</Link>
                  </li>
                  <li className="pb-6 text-l text-white py-2 px-0 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900 md:hover:bg-transparent">
                    <Link id="pageLink" href="/Services" onClick={() => setNavbar(!navbar)}>Services</Link>
                  </li>
                  <li className="pb-6 text-l text-white py-2 px-0 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900 md:hover:bg-transparent">
                    <Link id="pageLink" href="tel:801-574-1949">801-574-1949</Link>
                  </li>
                  <li className="pb-6 text-l text-white py-2 px-0 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900 md:hover:bg-transparent">
                    <Link id="pageLink" href="/Contact" onClick={() => setNavbar(!navbar)}>Contact</Link>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
