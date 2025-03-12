import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import etchnewlogo from "../images/logonew.png";
import { Link } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import ispimage from "../images/isp1.png";
import cusatimg from "../images/cusat2.png";
const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "EVENTS", href: "/events", current: false },
  { name: "NEWSLETTER", href: "/newsletter", current: false },
  { name: "GALLERY", href: "/gallery", current: false},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-black sticky top-0 z-[100] border-b-2 border-white  "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className=" grid h-20  tablet:h-24 grid-flow-col items-center  text-white font-defmono">
              <div className="absolute ml-4 grid items-center left-0 text-3xl grid-flow-col gap-4  ">
                <img src={etchnewlogo} className="w-8 h-8"></img>
                <a href="/">
                  <p className="oversteer">ETCHNEW</p>
                </a>
              </div>

              <div className="  justify-self-end justify-items-end inset-y-0 left-0 flex items-center tablet:collapse">
                {/* Mobile menu button*/}
                {/* heh */}

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900  text-white"
                              : "text-gray-300 hover:bg-gray-700  hover:text-white",
                            "px-3 py-2 rounded-md text-sm  "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* haha */}

                <Disclosure.Button className=" rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="   text-white text-3xl font-defmono grid gap-2 grid-flow-col w-fit items-center justify-self-end absolute right-0 mr-6 py-auto px-auto collapse tablet:visible">
                
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" hover:translate-y-2 transition duration-200  ease-in-out hover:underline hover:text-red-600 p-1    "
                >

                HOME
                </Link>
                  
                <Link
               
                  to="/gallery"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:translate-y-2 transition duration-200  ease-in-out hover:underline hover:text-red-600 p-1   "
                >

                 GALLERY
                </Link>
                 
                <Link
               
                  to="/reg_page"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:translate-y-2 transition duration-200  ease-in-out hover:underline hover:text-red-600 p-1   "
                >

                 REGISTER
                </Link>

                <Link
                
                  to="/events"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" p-1   hover:translate-y-2 transition duration-200 ease-in-out hover:text-red-600 hover:underline "
                >
                  EVENTS
                </Link>
                <Link
                  to="/newsletter"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className=" pl-2   hover:translate-y-2 transition duration-200 ease-in-out hover:text-red-600 hover:underline "
                >
                  
                  NEWSLETTER
                </Link>
                <div className="navbargrid">  
                  <div className="grid grid-flow-col m-4">
                    <a href="https://cusat.ac.in/">
                      <img
                        src={cusatimg}
                        alt=""
                        className="w-[80px] pc:h-auto  bg-white rounded-xl m-4 justify-self-center   "
                        // data-aos="fade-right"
                        // data-aos-easing="ease-in-quart"
                        // data-aos-duration="500"
                        // data-aos-delay="500"
                      />
                    </a>
                    <a href="http://photonics.cusat.ac.in/">
                      <img
                        src={ispimage}
                        alt=""
                        className="w-[80px]  pc:h-auto  bg-white rounded-xl m-4 justify-self-center    "
                        // data-aos="fade-right"
                        // data-aos-easing="ease-in-quart"
                        // data-aos-duration="500"
                        // data-aos-delay="300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
