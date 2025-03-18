"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; }[] = [
  {
    title: "Main Campus",
    href: "/campuses/main-campus",
  },
  {
    title: "Suffah Campus",
    href: "/campuses/suffah-campus",
  },
  {
    title: "Iqbal Campus",
    href: "/campuses/iqbal-campus",
  },
  {
    title: "Ghazali Senior Campus",
    href: "/campuses/ghazali-senior-campus",
  },
  {
    title: "Ghazali Junior Campus",
    href: "/campuses/ghazali-junior-campus",
  },
  {
    title: "Razi Campus",
    href: "/campuses/razi-campus",
  },
  {
    title: "Jinnah Campus",
    href: "/campuses/jinnah-campus",
  },
  {
    title: "Fatima Jinnah Campus",
    href: "/campuses/fatima-jinnah-campus",
  },
  {
    title: "Shahpur Campus",
    href: "/campuses/shahpur-campus",
  },
  {
    title: "Rumi Campus",
    href: "/campuses/rumi-campus",
  },
  {
    title: "Sir Syed Campus",
    href: "/campuses/sir-syed-campus",
  },
]

export default function Menu() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Make styles more specific to override defaults
  const textColor = isHomePage ? 'text-white' : '!text-gray-900'
  
  const menuItemStyle = `${navigationMenuTriggerStyle()} ${textColor} ${
    isHomePage ? 'hover:text-white/80' : '!hover:text-gray-700'
  }`

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Admission", href: "/admission" },
    // { name: "Preschool", href: "/admissions/preschool" },
    // { name: "School", href: "/admissions/school" },
    // { name: "College", href: "/admissions/college" },
    { name: "About Us", href: "/about" },
    { name: "Contacts", href: "/contacts" }
  ];

  return (
    <NavigationMenu className={textColor}>
      <NavigationMenuList>
        {menuItems.slice(0, 2).map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1 * index,
              ease: "easeOut"
            }}
          >
            <NavigationMenuItem>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink 
                  className={`${menuItemStyle} !font-medium`}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </motion.div>
        ))}

        <motion.div>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={`${textColor} !font-medium ${
                isHomePage ? 'hover:text-white/80' : '!hover:text-gray-700'
              }`}
            >
              Campuses
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg">
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </motion.div>

        {menuItems.slice(2).map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + (0.1 * index),
              ease: "easeOut"
            }}
          >
            <NavigationMenuItem>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink 
                  className={`${menuItemStyle} !font-medium`}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </motion.div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
