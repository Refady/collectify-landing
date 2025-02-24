import logo from "@/assets/images/full-logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import type { NavItem } from "@/types.ts";

interface Props {
  navItems: NavItem[];
}

const Navigation = ({ navItems }) => {
  return (
    <div className="py-[30px] flex justify-between items-center">
      <a href="/">
        <img src={logo.src} alt="Collectify Logo" className="w-[150px]" />
      </a>

      <div className="hidden md:block">
        <DesktopNav items={navItems} />
      </div>

      <div className="md:hidden">
        <MobileNav items={navItems} />
      </div>
    </div>
  );
};

export default Navigation;
