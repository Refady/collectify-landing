import logo from "@/assets/images/full-logo.svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navitems = [
  {
    title: "O Collectify",
    href: "/#about",
  },
  {
    title: "Funkcje",
    href: "/#features",
  },
  {
    title: "FAQ",
    href: "/#features",
  },
  {
    title: "Kontakt",
    href: "/#contact",
  },
];

const Navigation = () => {
  return (
    <div className="py-[30px] flex justify-between items-center">
      <a href="/">
        <img src={logo.src} alt="Collectify Logo" className="w-[150px]" />
      </a>

      <div className="hidden md:block">
        <DesktopNav />
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navigation;
