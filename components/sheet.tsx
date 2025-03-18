"use client"
import * as React from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DialogTitle } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const campuses = [
  { title: "Main Campus", href: "/" },
  { title: "Suffah Campus", href: "/" },
  { title: "Iqbal Campus", href: "/" },
  { title: "Ghazali Senior Campus", href: "/" },
  { title: "Ghazali Junior Campus", href: "/" },
  { title: "Razi Campus", href: "/" },
  { title: "Jinnah Campus", href: "/" },
  { title: "Fatima Jinnah Campus", href: "/" },
  { title: "Shahpur Campus", href: "/" },
  { title: "Rumi Campus", href: "/" },
  { title: "Sir Syed Campus", href: "/" },
];

export default function SidebarMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className="h-8 w-10 text-gray-300 bg-gray-950 py-1 rounded-md md:hidden" />
      </SheetTrigger>

      <SheetContent side="right" className="w-64 sm:w-80">
        {/* Add a DialogTitle for accessibility */}
        <DialogTitle className="sr-only">Menu</DialogTitle>

        <div className="flex flex-col gap-y-4">
          {/* Home */}
          <Link href="/" className="text-lg font-medium py-2 hover:text-blue-500">
            Home
          </Link>

          {/* Academics */}
          <Link href="/academics" className="text-lg font-medium py-2 hover:text-blue-500">
            Academics
          </Link>

          {/* Campuses Dropdown */}
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-medium w-full text-left">
                  Campuses
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-[250px]">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {campuses.map((campus) => (
                      <ListItem key={campus.title} title={campus.title} href={campus.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Admission */}
          <Link href="/admission" className="text-lg font-medium py-2 hover:text-blue-500">
            Admission
          </Link>

          {/* About Us */}
          <Link href="/about" className="text-lg font-medium py-2 hover:text-blue-500">
            About Us
          </Link>

          {/* Contacts */}
          <Link href="/contacts" className="text-lg font-medium py-2 hover:text-blue-500">
            Contacts
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className="block p-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 transition"
          {...props}
        >
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
