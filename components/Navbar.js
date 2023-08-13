import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./navbar.scss";
import MobileNav from "./MobileNav";


const Navbar = () => {
  return (
    <>
      <div id="MainNav">
        <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:block">
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
                  <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"></button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={
                  "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                }
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-2 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900   md:hover:bg-transparent">
                    <Link id="pageLink" href="/About"> About Us</Link>
                  </li>
                  <li className="pb-2 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900  md:hover:bg-transparent">
                    <Link id="pageLink" href="/Our-Work">Our Work</Link>
                  </li>
                  <li className="pb-2 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900  md:hover:bg-transparent">
                    <Link id="pageLink" href="/Services">Services</Link>
                  </li>
                  <li className="pb-2 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900 md:hover:bg-transparent">
                    <Link id="pageLink" href="tel:801-574-1949">801-574-1949</Link>
                  </li>
                  <li className="pb-2 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-slate-600  border-white-900 md:hover:bg-transparent">
                    <Link id="pageLink" href="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* mobile nav */}
      <MobileNav />
    </>
  );
};

export default Navbar;
