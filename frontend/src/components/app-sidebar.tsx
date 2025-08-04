'use client'
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { adminItems, volunteerItems } from "@/lib/sidebar"
import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export function AppSidebar() {
    const { user, logout } = useAuth()
    const items: SidebarItem[] = user?.userType === 0 ? adminItems : volunteerItems;
    const sidebar = useSidebar()
    const router = useRouter()
    
    const handleOnClick = () => {
        sidebar.setOpenMobile(false)
        console.log("closed sidebar", sidebar.open)
    }

    const handleLogout = async () => {
        try {
            logout()
            router.push('/auth/login')
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return (
        <Sidebar>
            <SidebarContent className="flex flex-col h-full ">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                {
                                    user?.userType === 1 ? <>
                                        <h1 className="text-3xl text-center font-bold">{user?.name || "user"}</h1>
                                        <p className="text-center text-lg">Total credits : 100 </p>
                                    </> : <h1 className="text-3xl text-center font-bold">Admin</h1>
                                }
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <Separator />
                <SidebarGroup >
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-4 flex justify-center items-center w-full">
                            {items.map((item: SidebarItem) => (
                                <SidebarMenuItem key={item.title} className="w-full ">
                                    <SidebarMenuButton asChild onClick={handleOnClick}>
                                        <Link href={item.url} className="w-full flex justify-center text-xl font-semibold">
                                            {item.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <Separator />
                <SidebarGroup className="mt-auto mb-10">
                    <SidebarGroupContent >
                        <SidebarMenu>
                            <SidebarMenuItem className="w-full flex justify-center">
                                <Button onClick={handleLogout} variant="outline">Logout</Button>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}