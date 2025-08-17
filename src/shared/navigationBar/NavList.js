import Link from "next/link";

const navItems = [
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
