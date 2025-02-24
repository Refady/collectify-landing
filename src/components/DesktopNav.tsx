import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import type { NavItem } from "@/types.ts";

interface Props {
  items: NavItem[];
}

const DesktopNav: React.FC<Props> = ({ items }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={item.title}>
            <a href={item.url} className="font-medium" target={item.targetBlank ? "_blank" : "_self"}>
              <NavigationMenuLink>{item.title}</NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <a
            href="/app/"
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
