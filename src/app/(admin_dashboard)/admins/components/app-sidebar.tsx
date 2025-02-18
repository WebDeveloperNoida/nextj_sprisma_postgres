"use client"

import * as React from "react"
import {
  AlignJustify,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "AI Admin",
    email: "admin@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Enquiry",
      url: "#",
      icon: AlignJustify,
      isActive: false,
      items: [
        {
          title: "Hot Line",
          url: "/admins/enquiry/hotline",
        },
        {
          title: "Contact",
          url: "/admins/enquiry/contact",
        },
        {
          title: "Request",
          url: "/admins/enquiry/request",
        },
      ],
    },
    {
      title: "Accounts",
      url: "#",
      icon: AlignJustify,
      isActive: false,
      items: [
        {
          title: "Manage Users List",
          url: "/admins/users/manage",
        },
        {
          title: "Verified Users",
          url: "/admins/users/verified",
        },
        {
          title: "Unverified Users",
          url: "/admins/users/unverified",
        },
        {
          title: "Blocked Users",
          url: "/admins/users/blocked",
        }
      ],
    },
     //  stop Main Menu Here


  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
