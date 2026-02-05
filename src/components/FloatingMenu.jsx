import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"

const navigationLinks = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
]

const FloatingMenu = () => {
  return (
    <div className="btn-hamburger hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="btn-click magnetic" variant="ghost">
            <span className="text-[10px] uppercase font-bold">Menu</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-44 p-2 md:w-48">
          <NavigationMenu className="max-w-none *:w-full">
            <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className="w-full">
                  <Link to={link.href} className="block py-1.5 text-sm font-medium text-[color:var(--ink)]">
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default FloatingMenu
