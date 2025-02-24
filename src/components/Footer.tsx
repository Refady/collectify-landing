import logo from "@/assets/images/footer-logo.svg";
import type { CollectionEntry } from "astro:content";

interface Props {
  menus: CollectionEntry<"navigations">[];
}

const Footer: React.FC<Props> = ({ menus }) => {
  return (
    <footer className="w-full footer relative">
      <div className="w-full max-w-[1200px] p-[30px] mx-auto">
        <a href="/#"><img src={logo.src} alt="Collectify Logo" className="w-[200px] mb-[50px] mt-[50px]" /></a>

        <div className="flex flex-wrap gap-[50px]">
          {menus.map(({ data: menu }) => (
            <div key={menu.navigationId} className="mt-4">
              <h3 className="text-[17px] font-semibold">{menu.title}</h3>
              <ul className="mt-3">
                {menu.items.map((item) => (
                  <li key={item.title} className="mt-1">
                    <a href={item.url}
                       className="text-sm text-gray-200 hover:text-cprimary font-medium transition-colors">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-[2px] rounded-full bg-gray-800 mt-[70px] mb-[25px]"></div>
        <p className="text-[14px] text-gray-300">Copyright {new Date().getFullYear()} &copy; Collectify by Refady
          Software | All rights
          reserved </p>
      </div>
    </footer>
  );
};

export default Footer;