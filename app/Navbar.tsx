import Image from "next/image";
import Link from "next/link";
import { FaBars, FaMicrophone } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiVideoCamera } from "react-icons/pi";
import logo from "./images/logo.png";
import userImg from "./images/userImg.jpg";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-[#0f0f0f]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className=" flex items-center gap-5">
            <button className=" text-xl text-white">
              <FaBars />
            </button>
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={100} />
            </Link>
          </div>
          <div className="flex md:order-2 gap-5 text-white text-2xl ">
            <button>
              <PiVideoCamera />
            </button>

            <button className=" relative">
              <div className=" h-[15px] w-[15px] absolute bg-red-600 right-0 rounded-full">
                <p className=" text-[12px] mt-[-7px] font-semibold">1</p>
              </div>
              <IoMdNotificationsOutline />
            </button>
            <button>
              <Image
                src={userImg}
                alt="userImg"
                width={30}
                className=" rounded-full"
              />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <div className=" flex items-center gap-5">
              <form className=" w-[450px]">
                <div className="">
                  <div className="relative w-full">
                    <input
                      type="search"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border-l-gray-50 border-l-2 border border-gray-300  dark:bg-[#121212] dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0  right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-full border border-gray-600  dark:bg-[#2f2f2f]  "
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>
              </form>
              <button className=" text-lg text-white bg-[#3D3D3D] p-3 rounded-full">
                <FaMicrophone />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
