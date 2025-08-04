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

"use client"
import { useEffect, useState } from "react"
import { DataTable } from "@/components/volunteer-table"
import { columns } from "@/components/columns"
import { adminAPI } from "@/lib/api"
import type { VolunteerData } from "@/types/VolunteerTable"

const VolunteersPage = () => {
  const [volunteers, setVolunteers] = useState<VolunteerData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const res = await adminAPI.getVolunteers()
        // Map backend data to VolunteerData type
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

  return (
    <div className="px-10">
      <h1 className="text-center text-4xl font-bold pb-5">
        Volunteers
      </h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <DataTable columns={columns} data={volunteers} />
      )}
    </div>
  )
}

export default VolunteersPage;