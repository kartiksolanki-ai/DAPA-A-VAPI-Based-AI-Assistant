import { HelpCircle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserNav() {
  return (
    <div className="space-y-2">
      <a className="px-3 text-sm text-gray-400" href="/pages/account">Profile</a>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-10 w-full justify-start gap-2 bg-[#4DB6AC] px-3 text-white hover:bg-[#45A399]"
            >
              <Avatar className="h-6 w-6 bg-[#45A399] text-xs">
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
              <span className="text-sm">helloworld7...</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">helloworld7</p>
                <p className="text-xs leading-none text-muted-foreground">
                  hello@world.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 bg-[#2A2A2A] hover:bg-[#333333]"
        >
          <HelpCircle className="h-5 w-5 text-gray-400" />
        </Button>
      </div>
    </div>
  );
}
