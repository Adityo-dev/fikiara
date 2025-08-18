import Link from "next/link";

const navItems = [

  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Book Stores", path: "/book-stores" },
  { name: "Books Videos ", path: "/book-video-list" },
  { name: "Bundles & Plans", path: "/bundles-and-plans" },
  { name: "Community", path: "/community" },
  { name: "Earn With Us", path: "/earn-with-us" },

  { name: "All course", path: "/courses" },
  { name: "book stores", path: "/book-stores" },
  { name: "All Book Video List", path: "/book-video-list" },
  { name: "job", path: "/job" },
  { name: "join community", path: "/community" },

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
