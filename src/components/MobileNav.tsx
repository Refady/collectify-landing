import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogIn, Menu } from "lucide-react";
import { Button } from "./ui/button";
import type { NavItem } from "@/types.ts";

interface Props {
  items: NavItem[];
}

const MobileNav: React.FC<Props> = ({ items }) => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button className="cursor-pointer" variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex justify-center items-center">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="flex flex-col items-center justify-center">
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
                  className="font-medium block"
                >
                  <Button className="cursor-pointer">
                    <LogIn /> Rozpocznij
                  </Button>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
