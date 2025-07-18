import Link from "next/link";

const navItems = [
  { name: "class 1-12", path: "/class" },
  { name: "skills", path: "/skills" },
  { name: "admission", path: "/admission" },
  { name: "job", path: "/job" },
  { name: "book store", path: "/book-store" },
  { name: "book short video", path: "/book-short-video" },
];

function NavList() {
  return (
    <ul className="flex space-x-6">
      {navItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.path}
            className="text-white hover:text-blue-400 transition"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
