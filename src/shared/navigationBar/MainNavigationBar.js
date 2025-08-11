import NavList from "./NavList";
import NavLogo from "./NavLogo";
import NavRightBar from "./NavRightBar";

export default function MainNavigationBar() {
  return (
    <nav className="bg-[#114C5F] relative z-50 ">
      <div className="container mx-auto px-4 flex justify-between items-center py-5">
        <NavLogo />
        <NavList />
        <NavRightBar />
      </div>
    </nav>
  );
}
