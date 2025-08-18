import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Book Stores", path: "/book-stores" },
  { name: "Books Videos ", path: "/book-video-list" },
  { name: "Bundles & Plans", path: "/bundles-and-plans" },
  { name: "Community", path: "/community" },
  { name: "Earn With Us", path: "/earn-with-us" },
];

function NavList() {
  return (
    <ul className="flex space-x-8">
      {navItems.map((item) => (
        <li key={item?.name}>
          <Link
            href={item?.path}
            className="capitalize text-lg font-medium text-white hover:text-blue-400 transition"
          >
            {item?.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
