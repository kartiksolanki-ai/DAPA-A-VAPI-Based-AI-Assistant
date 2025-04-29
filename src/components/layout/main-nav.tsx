"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Phone,
  FileText,
  PenTool as Tool,
  Cuboid as Cube,
  Users as UsersRound,
  LineChart,
  MessageSquare,
  Webhook,
  ChevronDown
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isExpandable?: boolean;
  subItems?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    title: "Overview",
    href: "/pages/overview",
    icon: LineChart
  },
  {
    title: "Platform",
    href: "/pages/platform",
    icon: Tool,
    isExpandable: true,
    subItems: [
      {
        title: "Assistants",
        href: "/pages/platform/assistants",
        icon: Users
      },
      {
        title: "Phone Numbers",
        href: "/pages/platform/phone-numbers",
        icon: Phone
      },
      {
        title: "Files",
        href: "/pages/platform/files",
        icon: FileText
      },
      {
        title: "Tools",
        href: "/pages/platform/tools",
        icon: Tool
      },
      {
        title: "Blocks",
        href: "/pages/platform/blocks",
        icon: Cube
      },
      {
        title: "Squads",
        href: "/pages/platform/squads",
        icon: UsersRound
      }
    ]
  },
  {
    title: "Voice Library",
    href: "/pages/voice-library",
    icon: MessageSquare
  },
  {
    title: "Logs",
    href: "/pages/logs",
    icon: FileText,
    isExpandable: true,
    subItems: [
      {
        title: "Calls",
        href: "/pages/logs/calls",
        icon: Phone
      },
      {
        title: "API Requests",
        href: "/pages/logs/api",
        icon: Tool
      },
      {
        title: "Webhooks",
        href: "/pages/logs/webhooks",
        icon: Webhook
      }
    ]
  }
];

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
}

export function MainNav({
  className,
  items = navItems,
  ...props
}: MainNavProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Toggles expand state for expandable items
  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  // Checks if the current item or its subItems match the current pathname
  const isActive = (item: NavItem): boolean => {
    if (item.href === pathname) return true;
    if (item.subItems) {
      return item.subItems.some((subItem) => subItem.href === pathname);
    }
    return false;
  };

  useEffect(() => {
    // Automatically expand items if one of their subItems is active
    items.forEach((item) => {
      if (
        item.subItems &&
        isActive(item) &&
        !expandedItems.includes(item.title)
      ) {
        setExpandedItems((prev) => [...prev, item.title]);
      }
    });
  }, [pathname, items, expandedItems]);

  return (
    <nav className={cn("flex flex-col space-y-1", className)} {...props}>
      {items.map((item) => (
        <div key={item.title}>
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              isActive(item)
                ? "bg-[#2A2A2A] text-white"
                : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
            )}
            onClick={(e) => {
              if (item.isExpandable) {
                e.preventDefault();
                toggleExpand(item.title);
              }
            }}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
            {item.isExpandable && (
              <ChevronDown
                className={cn(
                  "ml-auto h-4 w-4 transition-transform duration-200",
                  expandedItems.includes(item.title) ? "rotate-180" : ""
                )}
              />
            )}
          </Link>
          {item.subItems && expandedItems.includes(item.title) && (
            <div className="ml-6 mt-1 space-y-1">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === subItem.href
                      ? "bg-[#2A2A2A] text-white"
                      : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                  )}
                >
                  <subItem.icon className="h-4 w-4" />
                  <span>{subItem.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
