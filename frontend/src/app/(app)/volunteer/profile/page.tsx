// "use client"
// import { useEffect, useState } from "react"
// import { volunteerAPI } from "@/lib/api"

// type VolunteerProfile = {
//   name: string
//   email: string
//   year?: number
//   credits?: number
//   totalActivities?: number
//   enrollmentNumber?: string
//   joiningDate?: string
// }

// const Profile = () => {
//   const [profile, setProfile] = useState<VolunteerProfile | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await volunteerAPI.getProfile()
//         setProfile(res.data)
//       } catch (err) {
//         setProfile(null)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchProfile()
//   }, [])

//   if (loading) {
//     return <div className="flex justify-center items-center h-full">Loading...</div>
//   }

//   if (!profile) {
//     return <div className="flex justify-center items-center h-full text-red-500">Failed to load profile.</div>
//   }

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow">
//       <h1 className="text-3xl font-bold mb-6 text-center">Volunteer Profile</h1>
//       <div className="space-y-4">
//         <div>
//           <span className="font-semibold">Name:</span> {profile.name}
//         </div>
//         <div>
//           <span className="font-semibold">Email:</span> {profile.email}
//         </div>
//         {profile.enrollmentNumber && (
//           <div>
//             <span className="font-semibold">Enrollment Number:</span> {profile.enrollmentNumber}
//           </div>
//         )}
//         {profile.year !== undefined && (
//           <div>
//             <span className="font-semibold">Year:</span> {profile.year}
//           </div>
//         )}
//         {profile.credits !== undefined && (
//           <div>
//             <span className="font-semibold">Credits:</span> {profile.credits}
//           </div>
//         )}
//         {profile.totalActivities !== undefined && (
//           <div>
//             <span className="font-semibold">Total Activities:</span> {profile.totalActivities}
//           </div>
//         )}
//         {profile.joiningDate && (
//           <div>
//             <span className="font-semibold">Joining Date:</span> {new Date(profile.joiningDate).toLocaleDateString()}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Profile

// design changes ----------------------------------------------------------------------------

"use client"
import { useEffect, useState } from "react"
import { volunteerAPI } from "@/lib/api"
import { useAuth } from "@/hooks/useAuth"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { adminItems, volunteerItems, type SidebarItem } from "@/lib/sidebar"
import { LogOut, UserCircle, Award, History, Calendar, GraduationCap, Hash, Fingerprint } from "lucide-react"
import { Span } from "next/dist/trace"

// --- Updated Profile Type to include all fields ---
type VolunteerProfile = {
  _id: string;
  userType: number;
  name: string;
  email: string;
  year?: number;
  credits?: number;
  totalActivities?: number;
  enrollmentNumber?: string;
  joiningDate?: string;
}

const Profile = () => {
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


    // --- START: Original Page Logic ---
    const [profile, setProfile] = useState<VolunteerProfile | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await volunteerAPI.getProfile()
                setProfile(res.data)
            } catch (err) {
                setProfile(null)
            } finally {
                setLoading(false)
            }
        }
        fetchProfile()
    }, [])
    // --- END: Original Page Logic ---


    // --- START: VISUAL REDESIGN ---
    const renderDetailItem = (Icon: React.ElementType, label: string, value?: string | number) => {
        if (value === undefined || value === null) return null;
        return (
            <div className="flex items-start py-3">
                <Icon className="w-5 h-5 mr-4 text-gray-400 shrink-0 mt-1" />
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">{label}</span>
                    <span className="font-medium text-gray-800">{value}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* --- Sidebar Components --- */}
            { !isMenuOpen && (
                <button 
                    onClick={() => setIsMenuOpen(true)} 
                    className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md text-gray-700 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-black animate-in fade-in duration-300"
                    aria-label="Open menu"
                >
                    <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            )}
            {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/40 z-30"></div>}
            <aside className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b"><h2 className="text-xl font-bold">Navigation</h2><button onClick={() => setIsMenuOpen(false)} className="p-1 rounded-full hover:bg-gray-100"><svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></div>
                <div className="flex flex-col h-[calc(100vh-77px)]"><div className="p-6 text-center border-b"><UserCircle className="h-16 w-16 text-gray-400 mx-auto" /><h3 className="text-lg font-semibold mt-2">{user?.name}</h3>{user?.userType === 1 ? <p className="text-sm text-gray-500 mt-1">Total Credits: {user.credits}</p> : <p className="text-sm text-gray-500 mt-1"></p>}</div><nav className="flex-grow p-4 space-y-2">{items.map((item) => {const isActive = pathname === item.url; return (<Link key={item.title} href={item.url} onClick={handleMenuClick} className={`flex items-center w-full p-3 rounded-lg font-medium ${isActive ? 'bg-black text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}><item.icon className="h-5 w-5 mr-4" />{item.title}</Link>)})}</nav><div className="p-4 mt-auto border-t"><Button onClick={handleLogout} variant="ghost" className="w-full justify-start font-medium text-red-500 hover:bg-red-50 p-3 h-auto"><LogOut className="h-5 w-5 mr-4" />Logout</Button></div></div>
            </aside>

            {/* --- Main Content Area --- */}
            <main className="pt-10 pb-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    {loading ? (
                        <div className="flex justify-center items-center h-96"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div></div>
                    ) : !profile ? (
                        <div className="text-center py-20 bg-white rounded-lg shadow-md"><p className="text-xl text-red-500">Failed to load profile.</p></div>
                    ) : (
                        <div className="max-w-4xl mx-auto">
                            {/* Profile Header Card */}
                            <div className="bg-white rounded-xl shadow-md p-8 text-center">
                                <UserCircle className="w-28 h-28 mx-auto text-gray-300" strokeWidth={1} />
                                <h1 className="text-4xl font-bold text-[#333333] mt-4">{profile.name}</h1>
                                <p className="text-lg text-gray-500 mt-1">{profile.email}</p>
                                <span className="inline-block mt-4 px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {user?.userType === 1 ? 'Volunteer' : 'Administrator'}
                                </span>
                            </div>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                                <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
                                    <div className="p-4 bg-yellow-100 rounded-full mr-4">
                                        <Award className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Total Credits</p>
                                        <p className="text-3xl font-bold text-[#333333]">{profile.credits ?? 0}</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
                                    <div className="p-4 bg-green-100 rounded-full mr-4">
                                        <History className="w-8 h-8 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Activities</p>
                                        <p className="text-3xl font-bold text-[#333333]">{profile.totalActivities ?? 0}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Personal Information Card */}
                            <div className="bg-white rounded-xl shadow-md p-8">
                                <h2 className="text-2xl font-bold text-[#333333] mb-2 border-b pb-4">Personal Information</h2>
                                <div className="divide-y divide-gray-100"> 
                                    {renderDetailItem(Hash, "Enrollment Number", profile.enrollmentNumber)}
                                    {renderDetailItem(GraduationCap, "Year of Study", profile.year)}
                                    {renderDetailItem(Calendar, "Joining Date", profile.joiningDate ? new Date(profile.joiningDate).toLocaleDateString() : undefined)}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Profile