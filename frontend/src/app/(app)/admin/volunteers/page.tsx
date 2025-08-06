// "use client"
// import { DataTable } from "@/components/volunteer-table"
// import { columns } from "@/components/columns"

// const page = () => {
//   const volunteers: VolunteerData[] = [
//     {
//       id: "v001",
//       name: "Aarav Sharma",
//       year: 2,
//       total_activities: 5,
//       credits: 15
//     },
//     {
//       id: "v002",
//       name: "Priya Desai",
//       year: 3,
//       total_activities: 8,
//       credits: 24
//     },
//     {
//       id: "v003",
//       name: "Rohan Mehta",
//       year: 1,
//       total_activities: 3,
//       credits: 9
//     },
//     {
//       id: "v004",
//       name: "Isha Patil",
//       year: 4,
//       total_activities: 12,
//       credits: 36
//     },
//     {
//       id: "v005",
//       name: "Kabir Joshi",
//       year: 2,
//       total_activities: 6,
//       credits: 18
//     }
//   ]

//   return (
//     <div className="px-10">
//       <h1 className="text-center text-4xl font-bold pb-5">
//         Volunteers
//       </h1>
      
//       <DataTable columns={columns} data={volunteers} />
//     </div>
//   )
// }

// export default page 

// "use client"
// import { useEffect, useState } from "react"
// import { DataTable } from "@/components/volunteer-table"
// import { columns } from "@/components/columns"
// import { adminAPI } from "@/lib/api"
// import type { VolunteerData } from "@/types/VolunteerTable"

// const VolunteersPage = () => {
//   const [volunteers, setVolunteers] = useState<VolunteerData[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchVolunteers = async () => {
//       try {
//         const res = await adminAPI.getVolunteers()
//         // Map backend data to VolunteerData type
//         const mapped = (res.volunteers || []).map((v: any) => ({
//           id: v._id,
//           name: v.name,
//           year: v.year,
//           total_activities: v.totalActivities,
//           credits: v.credits,
//         }))
//         setVolunteers(mapped)
//       } catch (err) {
//         setVolunteers([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchVolunteers()
//   }, [])

//   return (
//     <div className="px-10">
//       <h1 className="text-center text-4xl font-bold pb-5">
//         Volunteers
//       </h1>
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <DataTable columns={columns} data={volunteers} />
//       )}
//     </div>
//   )
// }

// export default VolunteersPage;

// design changes ----------------------------------------------------------------------------------

"use client"
import { useEffect, useState } from "react"
import { DataTable } from "@/components/volunteer-table"
import { columns } from "@/components/columns"
import { adminAPI } from "@/lib/api"
import type { VolunteerData } from "@/types/VolunteerTable"
import { useAuth } from "@/hooks/useAuth"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { adminItems, volunteerItems, type SidebarItem } from "@/lib/sidebar"
import { LogOut, UserCircle } from "lucide-react"

const VolunteersPage = () => {
    // --- START: Integrated Sidebar Logic ---
    const router = useRouter()
    const pathname = usePathname()
    const { user, logout } = useAuth()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const items: SidebarItem[] = user?.userType === 0 ? adminItems : volunteerItems;

    const handleMenuClick = () => {
        if (isMenuOpen) setIsMenuOpen(false)
    }

    const handleLogout = async () => {
        try {
            logout()
            router.push('/auth/login')
        } catch (error) {
            console.error('Logout error:', error)
        }
    }
    // --- END: Integrated Sidebar Logic ---

    // --- START: Original Page Logic (Unchanged) ---
    const [volunteers, setVolunteers] = useState<VolunteerData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const res = await adminAPI.getVolunteers()
                const mapped = (res.volunteers || []).map((v: any) => ({
                    id: v._id,
                    name: v.name,
                    year: v.year,
                    total_activities: v.totalActivities,
                    credits: v.credits,
                }))
                setVolunteers(mapped)
            } catch (err) {
                setVolunteers([])
            } finally {
                setLoading(false)
            }
        }
        fetchVolunteers()
    }, [])
    // --- END: Original Page Logic (Unchanged) ---

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* --- Sidebar Components --- */}
            { !isMenuOpen && (
                <button onClick={() => setIsMenuOpen(true)} className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700 hover:text-black focus:outline-none ring-2 ring-transparent focus:ring-black animate-in fade-in duration-300" aria-label="Open menu">
                    <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            )}
            {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/40 z-30"></div>}
            <aside className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b"><h2 className="text-xl font-bold">Admin Panel</h2><button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-gray-100"><svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                <div className="flex flex-col h-[calc(100vh-77px)]"><div className="p-6 text-center border-b"><UserCircle className="h-16 w-16 text-gray-400 mx-auto" /><h3 className="text-lg font-semibold mt-2">{user?.name}</h3><p className="text-sm text-gray-500 mt-1">Administrator</p></div><nav className="flex-grow p-4 space-y-2">{items.map((item) => {const isActive = pathname.includes(item.url); return (<Link key={item.title} href={item.url} onClick={handleMenuClick} className={`flex items-center w-full p-3 rounded-lg font-medium ${isActive ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}><item.icon className="h-5 w-5 mr-4" />{item.title}</Link>)})}</nav><div className="p-4 mt-auto border-t"><Button onClick={handleLogout} variant="ghost" className="w-full justify-start font-medium text-red-500 hover:bg-red-50 p-3 h-auto"><LogOut className="h-5 w-5 mr-4" />Logout</Button></div></div>
            </aside>

            {/* --- Main Content Area --- */}
            <main className="pt-10 pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="text-left mb-12">
                        <h1 className="text-4xl font-bold text-[#333333]">Volunteer Management</h1>
                        <p className="text-gray-500 mt-2">View and manage all registered volunteers.</p>
                    </div>

                    {/* Data Table Container */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                         {loading ? (
                            <div className="flex justify-center items-center h-96">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                            </div>
                        ) : (
                            <DataTable columns={columns} data={volunteers} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default VolunteersPage