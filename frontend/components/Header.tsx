import Link from "next/link";
import { IoMoonSharp, IoSearch, IoSearchSharp } from "react-icons/io5";

type LinkType = {
  label: string;
  href: string;
  icon?: JSX.Element;
};

const navLinks: LinkType[] = [
  {
    label: "Home",
    href: "/",
    icon: <IoSearchSharp />,
  },
  {
    label: "Home",
    href: "/",
    icon: <IoSearchSharp />,
  },
  {
    label: "Home",
    href: "/",
    icon: <IoSearchSharp />,
  },
  {
    label: "Home",
    href: "/",
    icon: <IoSearchSharp />,
  },
];

export default function Header() {
  return (
    <div className="relative bg-slate-100 dark:bg-slate-800">
      <div className="relative space-x-6 py-8 flex items-center justify-between text-gray-800 dark:text-gray-100 max-w-7xl px-16 max-sm:px-4 m-auto">
        <div className="">
          <Link href="/">
            <h1 className="font-bold md:text-3xl text-2xl text-gray-800 dark:text-green-600 ">
              Obi<span className="text-green-600 dark:text-white">Tech</span>
            </h1>
          </Link>
        </div>
        <div className="max-sm:hidden w-80 flex items-center rounded-full border overflow-hidden px-6 bg-slate-200 dark:text-black ">
          <IoSearchSharp />
          <input
            type="search "
            placeholder="Discover news, articles and more"
            className="w-full p-1 text-base border-none outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-8 max-sm:fixed max-sm:top-0 max-sm:-right-72">
          <ul className="flex itmes-center gap-8 max-sm:hidden">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <li className="font-medium text-cyan-300 hover:text-cyan-500 dark:text-slate-300">
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>

          <div className="">
            <button className="max-sm:flex w-10 h-10 bg-gray-800 dark:bg-slate-200 text-gray-800 dark:text-gray-200">
              <IoMoonSharp />
            </button>
            <button className="">
              <IoSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
