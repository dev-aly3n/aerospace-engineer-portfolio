import Link from "next/link";

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
  return (
      <div className="h-full w-full flex flex-col sm:flex-row justify-evenly items-center bg-gray-900">
        <h1
          className="text-xl sm:text-2xl md:text-3xl pt-2 whitespace-nowrap text-white"
          style={{ fontFamily: "'Berkshire Swash', cursive" }}
        >
          <Link href='/' >Atefeh Hasani</Link>
        </h1>
        <ul className="flex justify-center items-stretch sm:text-xl font-bold">
          {headerLinks.map((headLink) => {
            return (
              <li>
                <Link href={headLink.ref}>
                  <a className="text-white  hover:bg-gray-100
                   hover:text-black px-3 md:px-6 lg:px-10 py-3 md:py-5 block duration-700">
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
