// 'use client'
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"
// import { Button } from "@/components/ui/button"
// import { Menu } from "lucide-react"
// import ProtectedRoute from "@/components/ProtectedRoute"

// export default function DashboardLayout({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     return (
//         <ProtectedRoute>
//             <div>
//                 <SidebarProvider defaultOpen={false}>
//                     <AppSidebar />
//                     <main className="w-full">
//                         <SidebarTrigger />
//                         {children}
//                     </main>
//                 </SidebarProvider>
//             </div>
//         </ProtectedRoute>
//     )
// }

'use client'
import ProtectedRoute from "@/components/ProtectedRoute"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProtectedRoute>
            {/* We've removed the SidebarProvider, AppSidebar, and SidebarTrigger.
              This layout now only provides the protection route and a main content area.
            */}
            <main>
                {children}
            </main>
        </ProtectedRoute>
    )
}