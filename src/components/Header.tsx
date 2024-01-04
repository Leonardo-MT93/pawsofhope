import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <div className="max-w-full flex flex-wrap items-center justify-around  p-4 bg-slate-500">
        <h1>Pawns of Hope</h1>
        <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            {/* <NavigationMenuLink> */}
              About
            {/* </NavigationMenuLink> */}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            {/* <NavigationMenuLink> */}
              Adoptions
            {/* </NavigationMenuLink> */}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            {/* <NavigationMenuLink> */}
              Store
            {/* </NavigationMenuLink> */}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            {/* <NavigationMenuLink> */}
              Visit us
            {/* </NavigationMenuLink> */}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

        <Button>Login</Button>
    </div>
  )
}

export default Header
