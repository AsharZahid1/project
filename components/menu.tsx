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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Main Campus",
    href: "/campuses/main-campus",
    description: "Our flagship campus with state-of-the-art facilities",
  },
  {
    title: "Suffah Campus",
    href: "/campuses/suffah-campus",
    description: "Excellence in Islamic and modern education",
  },
  {
    title: "Iqbal Campus",
    href: "/campuses/iqbal-campus",
    description: "Named after the great philosopher-poet",
  },
  {
    title: "Ghazali Senior Campus",
    href: "/campuses/ghazali-senior-campus",
    description: "Advanced facilities for higher education",
  },
  {
    title: "Ghazali Junior Campus",
    href: "/campuses/ghazali-junior-campus",
    description: "Nurturing young minds for the future",
  },
  {
    title: "Razi Campus",
    href: "/campuses/razi-campus",
    description: "Focus on scientific excellence",
  },
  {
    title: "Jinnah Campus",
    href: "/campuses/jinnah-campus",
    description: "Named after the founder of Pakistan",
  },
  {
    title: "Fatima Jinnah Campus",
    href: "/campuses/fatima-jinnah-campus",
    description: "Dedicated to women's education",
  },
  {
    title: "Shahpur Campus",
    href: "/campuses/shahpur-campus",
    description: "Serving the Shahpur community",
  },
  {
    title: "Rumi Campus",
    href: "/campuses/rumi-campus",
    description: "Inspiring creativity and wisdom",
  },
  {
    title: "Sir Syed Campus",
    href: "/campuses/sir-syed-campus",
    description: "Continuing the legacy of educational reform",
  },
]

export default function Menu() {
  const pathname = usePathname()
  const isCampusPage = pathname?.includes('/campuses/')

  const menuItemStyle = isCampusPage 
    ? `${navigationMenuTriggerStyle()} !text-gray-900` 
    : `${navigationMenuTriggerStyle()} text-white`

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/academics" },
    { name: "Admission", href: "/admission" },
    { name: "About Us", href: "/about" },
    { name: "Contacts", href: "/contacts" }
  ];

  return (
    <NavigationMenu className={isCampusPage ? 'text-gray-900' : 'text-white'}>
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
                <NavigationMenuLink className={menuItemStyle}>
                  {item.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </motion.div>
        ))}

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className={isCampusPage ? '!text-gray-900' : 'text-white'}
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
                  >
                    {component.description}
                  </ListItem>
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
                <NavigationMenuLink className={menuItemStyle}>
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
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
