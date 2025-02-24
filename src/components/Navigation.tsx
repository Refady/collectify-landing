import logo from "@/assets/images/full-logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import type { NavItem } from "@/types.ts";

interface Props {
  navItems: NavItem[];
}

const Navigation = ({ navItems }) => {
  return (
    <div className="w-full bg-background sticky top-0 z-30 backdrop-opacity-10">
      <div
        className="p-[30px] flex justify-between items-center w-full max-w-[1200px] mx-auto">
        <a href="/">
          <img src={logo.src} alt="Collectify Logo" className="w-[150px]" />
        </a>

        <div className="hidden md:block z-50">
          <DesktopNav items={navItems} />
        </div>

        <div className="md:hidden z-50">
          <MobileNav items={navItems} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
