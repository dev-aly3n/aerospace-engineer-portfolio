import Link from "next/link";
import { useRouter } from "next/router";

const headerLinks = [
  {
    ref: "/",
    text: "University",
  },
  {
    ref: "/sport",
    text: "Sport",
  },
  {
    ref: "/art",
    text: "Art",
  },
  {
    ref: "/biography",
    text: "Biography",
  },
];

const Header = () => {
  const router = useRouter();
  return (
      <div className="h-full w-full flex flex-col sm:flex-row justify-evenly items-center bg-gray-900 relative" style={{zIndex:100}}>
        <h1
          className="text-xl sm:text-2xl md:text-3xl pt-2 whitespace-nowrap text-white hover:text-pink-200 duration-2000"
          style={{ fontFamily: "'Berkshire Swash', cursive" }}
        >
          <Link href='/' >Atefeh Hasani</Link>
        </h1>
        <ul className="flex justify-center items-stretch sm:text-xl font-bold">
          {headerLinks.map((headLink) => {
            return (
              <li key={headLink.text}>
                <Link href={headLink.ref}>
                  <a className={`${router.pathname === headLink.ref ? "bg-gray-100 text-gray-900":"text-white"}   hover:bg-gray-100
                   hover:text-black px-3 md:px-6 lg:px-10 py-3 md:py-5 block duration-700`}>
                    {headLink.text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Header;
