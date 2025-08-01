import NavList from "./NavList";
import NavLogo from "./NavLogo";
import NavRightBar from "./NavRightBar";

export default function MainNavigationBar() {
  return (
    <nav className="relative z-50 container mx-auto px-4 flex justify-between items-center py-5">
      <NavLogo />
      <NavList />
      <NavRightBar />
    </nav>
  );
}
