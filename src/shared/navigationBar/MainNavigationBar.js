import NavList from "./NavList";
import NavLogo from "./NavLogo";
import NavRightBar from "./NavRightBar";

export default function MainNavigationBar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <NavLogo />
      <NavList />
      <NavRightBar />
    </nav>
  );
}
