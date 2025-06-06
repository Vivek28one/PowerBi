import * as React from "react"
import { GalleryVerticalEnd, LogOut } from "lucide-react"
import { Link } from "react-router-dom"
import clivLogo from "@/assets/Cliv.png"

import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import { data } from "@/constants/constants"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/" className="flex items-center gap-3">
                <div className="flex aspect-square items-center justify-center rounded-lg bg-sidebar-accent/10">
                  <img 
                    src={clivLogo} 
                    alt="logo" 
                    width={state === "collapsed" ? 48 : 48} 
                    height={state === "collapsed" ? 48 : 48}
                    className="transition-all duration-200" 
                  />
                </div>
                {state !== "collapsed" && (
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold tracking-tight">CLIV</span>
                    <span className="text-xs text-muted-foreground">Dashboard</span>
                  </div>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
