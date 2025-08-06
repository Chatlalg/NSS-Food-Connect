// const adminItems: SidebarItem[] = [
//     {
//         title: "Donations",
//         url: "/admin/donations"
//     },
//     {
//         title: "Volunteers",
//         url: "/admin/volunteers"
//     },
// ]
// const volunteerItems: SidebarItem[] = [
//     {
//         title: "Activities",
//         url: "/volunteer/activities"
//     },
//     {
//         title: "Donate",
//         url: "/volunteer/donate"
//     },
//     {
//         title: "Profile",
//         url: "/volunteer/profile"
//     },
// ]

// export { adminItems, volunteerItems }

import { 
    type LucideIcon, 
    Package, 
    Users, 
    History, 
    HandHeart, 
    UserCircle 
} from "lucide-react";

// Define the shape of our sidebar items, now including an icon
export interface SidebarItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const adminItems: SidebarItem[] = [
    {
        title: "Donations",
        url: "/admin/donations",
        icon: Package // Icon for Donations
    },
    {
        title: "Volunteers",
        url: "/admin/volunteers",
        icon: Users // Icon for Volunteers
    },
]

const volunteerItems: SidebarItem[] = [
    {
        title: "Activities",
        url: "/volunteer/activities",
        icon: History // Icon for Activities
    },
    {
        title: "Donate",
        url: "/volunteer/donate",
        icon: HandHeart // Icon for Donate
    },
    {
        title: "Profile",
        url: "/volunteer/profile",
        icon: UserCircle // Icon for Profile
    },
]

export { adminItems, volunteerItems }