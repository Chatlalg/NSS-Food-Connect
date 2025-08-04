// 'use client'
// import ActivityCard, { ActivityCardProps } from "@/components/volunteer-activity-card"
// import foodImg from "@/../public/food.png"
// import { Separator } from "@/components/ui/separator"

// const activeItems: ActivityCardProps[] = [
//   {
//     _id : "123456789",
//     tokens: 2,
//     img_src: foodImg,
//     mess: "Madhura Mess",
//     date: "17/07/2025",
//     isActive: true,
//   },
//   {
//     _id : "1234567e89",
//     tokens: 1,
//     img_src: foodImg,
//     mess: "Annapurna",
//     date: "17/07/2025",
//     isActive: true,
//   },
//   {
//     _id : "1234afe56789",
//     tokens: 3,
//     img_src: foodImg,
//     mess: "Sai Bhojanalay",
//     date: "17/07/2025",
//     isActive: true,
//   },
// ]

// const completeItems: ActivityCardProps[] = [
//   {
//     _id : "1234567aefe89",
//     tokens: 1,
//     img_src: foodImg,
//     mess: "Madhura Mess",
//     date: "16/07/2025",
//     isActive: false,
//   },
//   {
//     _id : "123erer456789",
//     tokens: 2,
//     img_src: foodImg,
//     mess: "Yogita Dining",
//     date: "15/07/2025",
//     isActive: false,
//   },
//   {
//     _id : "1234567aea89",
//     tokens: 1,
//     img_src: foodImg,
//     mess: "Krishna Bhojanalay",
//     date: "14/07/2025",
//     isActive: false,
//   },
//   {
//     _id : "123456aefe789",
//     tokens: 2,
//     img_src: foodImg,
//     mess: "Ganesh Mess",
//     date: "13/07/2025",
//     isActive: false,
//   },
// ]

// const Activities = () => {
//   return (
//     <div className="w-full h-full px-4">
//       <div className="w-full">
//         <h1 className="text-center text-3xl font-bold mb-5">Activities</h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
//         {
//           activeItems.map((item) => (
//             <ActivityCard props={item} key={item._id}/>
//           ))

//         }
//       </div>
//       <div>
//         <Separator />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
//         {
//           completeItems.map((item) => (
//             <ActivityCard props={item} key={item._id}/>
//           ))

//         }
//       </div>
//     </div>
//   )
// }

// export default Activities

'use client'
import { useEffect, useState } from "react"
import ActivityCard, { ActivityCardProps } from "@/components/volunteer-activity-card"
import foodImg from "@/../public/food.png"
import { Separator } from "@/components/ui/separator"
import { volunteerAPI } from "@/lib/api"

const Activities = () => {
  const [pending, setPending] = useState<ActivityCardProps[]>([])
  const [completed, setCompleted] = useState<ActivityCardProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await volunteerAPI.getActivities()
        // Map backend data to ActivityCardProps
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

  if (loading) {
    return <div className="w-full h-full flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="w-full h-full px-4">
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold mb-5">Activities</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
        {pending.length === 0
          ? <div className="col-span-3 text-center text-gray-500">No active activities</div>
          : pending.map((item) => (
              <ActivityCard props={item} key={item._id}/>
            ))
        }
      </div>
      <div>
        <Separator />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
        {completed.length === 0
          ? <div className="col-span-3 text-center text-gray-500">No completed activities</div>
          : completed.map((item) => (
              <ActivityCard props={item} key={item._id}/>
            ))
        }
      </div>
    </div>
  )
}

export default Activities