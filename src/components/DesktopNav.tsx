import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navitems } from "@/utils/navitems";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

const DesktopNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navitems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <a href={item.href} className="font-medium">
              <NavigationMenuLink>{item.title}</NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <a
            href="https://app.collectify.tech/"
            target="_blank"
            className="font-medium ml-[15px] block"
          >
            <Button className="cursor-pointer">
              <LogIn /> Rozpocznij
            </Button>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
