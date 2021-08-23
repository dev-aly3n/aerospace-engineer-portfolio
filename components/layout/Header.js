import Link from "next/link";

const Header = () => {
  return (
    <div className="h-16 w-full bg-gray-900">
      <ul className="flex justify-center items-center   text-xl font-bold gap-x-20">
        <li>
          <Link href="/">
            <a className="text-white  hover:bg-gray-100 hover:text-black px-5 py-3 block">
              University
            </a>
          </Link>
        </li>
        <li>
          <Link href="/sport">
            <a className="text-white  hover:bg-gray-100 hover:text-black px-5 py-3 block">
              Sport
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
