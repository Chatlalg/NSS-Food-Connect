// "use client"

// import { useEffect, useState } from "react"
// import ActivityCard, { ActivityCardProps } from "@/components/admin-activity-card"
// import foodImg from "@/../public/food2.png"
// import { adminAPI } from "@/lib/api"
// import DonationDetailModal from "@/components/donation-detail-modal"
// import { Separator } from "@/components/ui/separator"

// const Donations = () => {
//   const [donations, setDonations] = useState<ActivityCardProps[]>([])
//   const [loading, setLoading] = useState(true)
//   const [selectedDonation, setSelectedDonation] = useState<any | null>(null)

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const res = await adminAPI.getDonations()
//         const mapped = (res.donations || []).map((item: any) => ({
//           _id: item._id,
//           image: foodImg,
//           mess: item.messname,
//           volunteer: item.volunteerid?.name || "Unknown",
//           foodtype: item.foodtype,
//           donationdate: item.donationdate,
//           quantity: item.quantity,
//           bestbefore: item.bestbefore,
//           category: item.category,
//           description: item.description,
//           imgurl: item.imgurl,
//           status: item.status
//         }))
//         setDonations(mapped)
//       } catch (err) {
//         setDonations([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchDonations()
//   }, [])

//   return (
//     <div className="w-full h-full px-4">
//       <div className="w-full">
//         <h1 className="text-center text-3xl font-bold mb-5 ">Pending Donations</h1>
//       </div>
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 justify-items-center">
//           {donations.length === 0 ? (
//             <div className="col-span-3 text-center text-gray-500">No donations found</div>
//           ) : (
//             donations.map((item) => (
//               item.status==="pending" &&
//               <div key={item._id} onClick={() => setSelectedDonation(item)} className="cursor-pointer">
//                 <ActivityCard {...item} />
//               </div>
//             ))
//           )}
//         </div>
//       )}
//       <h2 className="text-center text-3xl font-bold text-green-900">Completed Donations</h2>
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 justify-items-center">
//           {donations.length === 0 ? (
//             <div className="col-span-3 text-center text-gray-500">No donations found</div>
//           ) : (
//             donations.map((item) => (
//               item.status!=="pending" &&
//               <div key={item._id} onClick={() => setSelectedDonation(item)} className="cursor-pointer">
//                 <ActivityCard {...item} />
//               </div>
//             ))
//           )}
//         </div>
//       )}
//       {selectedDonation && (
//         <DonationDetailModal
//           donation={selectedDonation}
//           onClose={() => setSelectedDonation(null)}
//         />
//       )}
//     </div>
//   )
// }

// export default Donations

// design changes -----------------------------------------------

"use client"

import { useEffect, useState } from "react"
import ActivityCard from "@/components/admin-activity-card"
import foodImg from "@/../public/food2.png" // Assuming this path is correct
import { adminAPI } from "@/lib/api"
import DonationDetailModal from "@/components/donation-detail-modal"
import { useAuth } from "@/hooks/useAuth"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { adminItems, volunteerItems, type SidebarItem } from "@/lib/sidebar"
import { LogOut, UserCircle } from "lucide-react"

const Donations = () => {
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
    const [donations, setDonations] = useState<any[]>([]) // Using 'any' as we don't have the ActivityCardProps type for admin yet
    const [loading, setLoading] = useState(true)
    const [selectedDonation, setSelectedDonation] = useState<any | null>(null)

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const res = await adminAPI.getDonations()
                const mapped = (res.donations || []).map((item: any) => ({
                    _id: item._id,
                    image: foodImg,
                    mess: item.messname,
                    volunteer: item.volunteerid?.name || "Unknown",
                    foodtype: item.foodtype,
                    donationdate: item.donationdate,
                    quantity: item.quantity,
                    bestbefore: item.bestbefore,
                    category: item.category,
                    description: item.description,
                    imgurl: item.imgurl,
                    status: item.status
                }))
                setDonations(mapped)
            } catch (err) {
                setDonations([])
            } finally {
                setLoading(false)
            }
        }
        fetchDonations()
    }, [])
    // --- END: Original Page Logic (Unchanged) ---

    // Pre-filter donations for cleaner rendering
    const pendingDonations = donations.filter(d => d.status === "pending");
    const completedDonations = donations.filter(d => d.status !== "pending");

    const [activeTab, setActiveTab] = useState('pending');

    return (
        <div className="bg-[#FDFDFD] min-h-screen">
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
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-[#333333]">Donations Dashboard</h1>
                        <p className="text-gray-500 mt-2">Oversee all incoming and completed donations.</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="mb-8 border-b border-gray-200">
                        <div className="flex space-x-8">
                            <button
                                onClick={() => setActiveTab('pending')}
                                className={`py-4 px-1 text-lg font-medium ${activeTab === 'pending' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-black'}`}
                            >
                                Pending ({pendingDonations.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('completed')}
                                className={`py-4 px-1 text-lg font-medium ${activeTab === 'completed' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-black'}`}
                            >
                                Completed ({completedDonations.length})
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div></div>
                    ) : (
                        <div>
                            {/* Pending Donations Grid */}
                            {activeTab === 'pending' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {pendingDonations.length > 0 ? (
                                        pendingDonations.map((item) => (
                                            <div key={item._id} onClick={() => setSelectedDonation(item)} className="cursor-pointer">
                                                <ActivityCard {...item} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center text-gray-500 py-20 bg-gray-50 rounded-lg">No pending donations at the moment.</div>
                                    )}
                                </div>
                            )}

                            {/* Completed Donations Grid */}
                            {activeTab === 'completed' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {completedDonations.length > 0 ? (
                                        completedDonations.map((item) => (
                                            <div key={item._id} onClick={() => setSelectedDonation(item)} className="cursor-pointer">
                                                <ActivityCard {...item} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center text-gray-500 py-20 bg-gray-50 rounded-lg">No completed donations found.</div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>

            {/* Modal remains unchanged */}
            {selectedDonation && (
                <DonationDetailModal
                    donation={selectedDonation}
                    onClose={() => setSelectedDonation(null)}
                />
            )}
        </div>
    )
}

export default Donations
