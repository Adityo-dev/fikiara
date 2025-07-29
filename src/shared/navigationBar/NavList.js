import Link from "next/link";

const navItems = [
  { name: "All course", path: "/courses" },
  { name: "skills", path: "/skills" },
  { name: "admission", path: "/admission" },
  { name: "job", path: "/job" },
  { name: "book store", path: "/book-store" },
  { name: "book short video", path: "/book-short-video" },
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
