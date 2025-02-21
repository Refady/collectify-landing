import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navitems } from "@/utils/navitems";
import { LogIn, Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileNav = () => {
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
