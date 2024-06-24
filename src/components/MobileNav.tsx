import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNAvLinks";

const MobileNav = () => {
  const{ isAuthenticated, loginWithRedirect, user} = useAuth0();  
  return(
    <Sheet>
        <SheetTrigger>
             <Menu className="text-orange-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle className="text-center mx-auto">
            {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.email}
            </span>
          ) : (
                <span>Welcome to Fellas </span> 
          )}
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500"
            >
              Log In
            </Button>
          )}

            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;