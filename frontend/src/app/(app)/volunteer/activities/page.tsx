// 'use client'
// import { useEffect, useState } from "react"
// import ActivityCard, { ActivityCardProps } from "@/components/volunteer-activity-card"
// import foodImg from "@/../public/food.png"
// import { Separator } from "@/components/ui/separator"
// import { volunteerAPI } from "@/lib/api"

// const Activities = () => {
//   const [pending, setPending] = useState<ActivityCardProps[]>([])
//   const [completed, setCompleted] = useState<ActivityCardProps[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchActivities = async () => {
//       try {
//         const res = await volunteerAPI.getActivities()
//         // Map backend data to ActivityCardProps
//         const mapActivity = (item: any, isActive: boolean): ActivityCardProps => ({
//           _id: item._id,
//           tokens: item.credits || 1,
//           img_src: foodImg,
//           mess: item.messname || "Mess",
//           date: item.donationdate
//             ? new Date(item.donationdate).toLocaleDateString()
//             : "",
//           isActive,
//         })
//         setPending((res.pending || []).map((item: any) => mapActivity(item, true)))
//         setCompleted((res.completed || []).map((item: any) => mapActivity(item, false)))
//       } catch (err) {
//         setPending([])
//         setCompleted([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchActivities()
//   }, [])

//   if (loading) {
//     return <div className="w-full h-full flex items-center justify-center">Loading...</div>
//   }

//   return (
//     <div className="w-full h-full px-4">
//       <div className="w-full">
//         <h1 className="text-center text-3xl font-bold mb-5">Activities</h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
//         {pending.length === 0
//           ? <div className="col-span-3 text-center text-gray-500">No active activities</div>
//           : pending.map((item) => (
//               <ActivityCard props={item} key={item._id}/>
//             ))
//         }
//       </div>
//       <div>
//         <Separator />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
//         {completed.length === 0
//           ? <div className="col-span-3 text-center text-gray-500">No completed activities</div>
//           : completed.map((item) => (
//               <ActivityCard props={item} key={item._id}/>
//             ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Activities

// design changes ------------------------------------------------------------------------------------

'use client'
import { useEffect, useState } from "react"
import ActivityCard, { ActivityCardProps } from "@/components/volunteer-activity-card"
import foodImg from "@/../public/food.png" // Assuming this path is correct
import { Separator } from "@/components/ui/separator"
import { volunteerAPI } from "@/lib/api"
import { useAuth } from "@/hooks/useAuth"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { adminItems, volunteerItems, type SidebarItem } from "@/lib/sidebar"
import { LogOut, UserCircle } from "lucide-react"

const Activities = () => {
    // --- START: Integrated Sidebar Logic ---
    const router = useRouter()
    const pathname = usePathname()
    const { user, logout } = useAuth()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const items: SidebarItem[] = user?.userType === 0 ? adminItems : volunteerItems;

    const handleMenuClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
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
    const [pending, setPending] = useState<ActivityCardProps[]>([])
    const [completed, setCompleted] = useState<ActivityCardProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const res = await volunteerAPI.getActivities()
                const mapActivity = (item: any, isActive: boolean): ActivityCardProps => ({
                    _id: item._id,
                    tokens: item.credits || 1,
                    img_src: foodImg,
                    mess: item.messname || "Mess",
                    date: item.donationdate
                        ? new Date(item.donationdate).toLocaleDateString()
                        : "",
                    isActive,
                })
                setPending((res.pending || []).map((item: any) => mapActivity(item, true)))
                setCompleted((res.completed || []).map((item: any) => mapActivity(item, false)))
            } catch (err) {
                setPending([])
                setCompleted([])
            } finally {
                setLoading(false)
            }
        }
        fetchActivities()
    }, [])
    // --- END: Original Page Logic (Unchanged) ---

    // --- START: VISUAL REDESIGN ---
    return (
        <div className="bg-gray-100 min-h-screen">
            
            {/* --- Sidebar Toggle Button --- */}
            { !isMenuOpen && (
                <button 
                    onClick={() => setIsMenuOpen(true)} 
                    className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-black animate-in fade-in duration-300"
                    aria-label="Open menu"
                >
                    <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            )}

            {/* --- Background Overlay --- */}
            {isMenuOpen && (
                <div 
                    onClick={() => setIsMenuOpen(false)} 
                    className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
                    aria-hidden="true"
                ></div>
            )}

            {/* --- Left Sliding Sidebar --- */}
            <aside 
                className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-[#333333]">Navigation</h2>
                    <button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-gray-100" aria-label="Close menu">
                        <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col h-[calc(100vh-77px)]">
                    <div className="p-6 text-center border-b border-gray-200">
                        <UserCircle className="h-16 w-16 text-gray-400 mx-auto" />
                        <h3 className="text-lg font-semibold text-[#333333] mt-2">{user?.name || "User"}</h3>
                        {user?.userType === 1 ? (
                            <p className="text-sm text-gray-500 mt-1">Total Credits: {user.credits}</p>
                        ) : (
                            <p className="text-sm text-gray-500 mt-1">Administrator</p>
                        )}
                    </div>
                    <nav className="flex-grow p-4 space-y-2">
                        {items.map((item) => {
                            const isActive = pathname === item.url;
                            return (
                                <Link key={item.title} href={item.url} onClick={handleMenuClick}
                                    className={`flex items-center w-full p-3 rounded-lg text-md font-medium transition-colors ${
                                        isActive ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                                    }`}
                                >
                                    <item.icon className="h-5 w-5 mr-4" /> 
                                    {item.title}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className="p-4 mt-auto border-t border-gray-200">
                        <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-md font-medium text-red-500 hover:text-red-500 hover:bg-red-50 p-3 h-auto">
                            <LogOut className="h-5 w-5 mr-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </aside>

            {/* --- Main Content Area --- */}
            <main className="pt-10 pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#333333]">My Activities</h1>
                        <p className="text-gray-500 mt-2">Track your pending and completed donations.</p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {/* Pending Activities Section */}
                            <div>
                                <h2 className="text-2xl font-semibold text-[#333333] mb-6">Pending</h2>
                                {pending.length === 0 ? (
                                    <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-lg">No active activities.</div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {pending.map((item) => <ActivityCard props={item} key={item._id}/>)}
                                    </div>
                                )}
                            </div>

                            <Separator />

                            {/* Completed Activities Section */}
                            <div>
                                <h2 className="text-2xl font-semibold text-[#333333] mb-6">Completed</h2>
                                {completed.length === 0 ? (
                                    <div className="text-center text-gray-500 py-12 bg-gray-50 rounded-lg">No completed activities yet.</div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {completed.map((item) => <ActivityCard props={item} key={item._id}/>)}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
    // --- END: VISUAL REDESIGN ---
}

export default Activities