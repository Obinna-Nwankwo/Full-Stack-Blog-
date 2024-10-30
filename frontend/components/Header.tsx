import Link from "next/link";
import { IoMoonSharp, IoSearch, IoSearchSharp } from "react-icons/io5";
import NavLink from "./reusables/NavLink";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import Topics from "./reusables/Topics";
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";

const Header : React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const openSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => { 
    setSearchOpen(false);
  };

  const openSideBar = () => {
    setSideBarOpen(true);
  };

  const closeSideBar = () => {
    setSideBarOpen(false);
  };

  const handleLinkClick = () => {
    setSearchOpen(false);
  };

  //set darkmode
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkmode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkmode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkmode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="header_sec shadow-xl "
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="header container relative space-x-6 text-gray-800 dark:text-gray-100 max-sm:px-4">
        <div className="logo ">
          <Link href="/">
            <h1 className="font-bold md:text-3xl text-2xl text-slate-400 ">
              Obi<span className="dark:text-cyan-600 ">Tech</span>
            </h1>
          </Link>
        </div>

        <div className="searchbar rounded-full bg-slate-800/70">
          <IoSearchSharp />
          <input
            onClick={openSearch}
            type="search "
            placeholder="Discover news, articles and more"
            className="w-full p-1 text-base border-none outline-none bg-transparent"
          />
        </div>

        <div className="nav_list_dark">
          <NavLink className="flex itmes-center gap-8 " />

          <div className="navlist_mobile_ul ">
            <button
              onClick={toggleDarkMode}
              className="w-6 h-6 text-gray-400 rounded-full p-1 ring-1 ring-slate-400"
            >
              {darkMode ? <IoMoonSharp /> : <LuSun />}
            </button>

            <button
              onClick={openSearch}
              className="w-6 h-6 rounded-full p-1 ring-1 ring-slate-400"
            >
              <IoSearch />
            </button>

            <button
              onClick={openSideBar}
              className="w-6 h-6 text-gray-400 rounded-full p-1 ring-1 ring-slate-400"
            >
              <HiOutlineBars3BottomRight />
            </button>
          </div>

          <div className="darkmode">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <span className="slider_header "></span>
            </label>
          </div>
        </div>
      </div>

      <div className={`${searchOpen ? "open" : ""} search_click`}>
        <div className="searchab_input rounded-2xl py-1 gap-4 px-6 bg-slate-300">
          <IoSearchSharp className="text-gray-800 text-xl" />
          <input
            type="search"
            placeholder="Discover news, articles and more"
            className="w-full px-6 rounded-full text-base ring-1 p-2 bg-slate-100"
          />
        </div>

        <div className="search_data text-center ">
          <div className="blog">
            <h3>search data</h3>
          </div>
        </div>

        <div className="exit_search" onClick={closeSearch}>
          <div className="size-5  ">
            <FaXmark />
          </div>
          <h4 className="text-gray-100">ESC </h4>
        </div>
      </div>

      <div className={sideBarOpen ? "navlist_mobile open" : "navlist_mobile"}>
        <div className="navlist_m_title flex justify-between">
          <h1 className="font-bold md:text-2xl text-2xl text-gray-800 dark:text-green-600 ">
            Obi
            <span className="text-green-600 dark:text-white">Tech</span>
          </h1>
          <button className="size-5 " onClick={closeSideBar}>
            <FaXmark />
          </button>
        </div>

        <hr />
        <h3 className="mt-1">Main Menu</h3>
        <NavLink onClick={handleLinkClick} className="" />
        <hr />
        <h3 className="mt-1">Main Menu</h3>
        <Topics onClick={handleLinkClick} />
      </div>
    </div>
  );
}


export default Header;