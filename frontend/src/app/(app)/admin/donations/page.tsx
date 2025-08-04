// "use client"

// import ActivityCard, { ActivityCardProps } from "@/components/admin-activity-card"
// import foodImg from "@/../public/food2.png"

// const Donations = () => {
//   const activity_info: ActivityCardProps[] = [
//     {
//       _id: "aefaefae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "ae3faefae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "aefa4efae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "ae1faefae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//     {
//       _id: "aefae5fae",
//       image: foodImg,
//       mess: "Madhura mess",
//       volunteer: "Atharva kuldhar"
//     },
//   ]
//   return (
//     <div className="w-full h-full px-4">
//       <div className="w-full">
//         <h1 className="text-center text-3xl font-bold mb-5">Donations</h1>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 justify-items-center">
//         {
//           activity_info.map((item) => (
//             <ActivityCard {...item} key={item._id}/>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Donations
// ---------------------------------------------------------------
// "use client"

// import { useEffect, useState } from "react"
// import ActivityCard, { ActivityCardProps } from "@/components/admin-activity-card"
// import foodImg from "@/../public/food2.png"
// import { adminAPI } from "@/lib/api"

// const Donations = () => {
//   const [donations, setDonations] = useState<ActivityCardProps[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDonations = async () => {
//       try {
//         const res = await adminAPI.getDonations()
//         // Map backend data to ActivityCardProps
//         const mapped = (res.donations || []).map((item: any) => ({
//           _id: item._id,
//           image: foodImg,
//           mess: item.messname,
//           volunteer: item.volunteerid?.name || "Unknown"
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
//         <h1 className="text-center text-3xl font-bold mb-5">Donations</h1>
//       </div>
//       {loading ? (
//         <div className="text-center">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 justify-items-center">
//           {donations.length === 0 ? (
//             <div className="col-span-3 text-center text-gray-500">No donations found</div>
//           ) : (
//             donations.map((item) => (
//               <ActivityCard {...item} key={item._id}/>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Donations

"use client"

import { useEffect, useState } from "react"
import ActivityCard, { ActivityCardProps } from "@/components/admin-activity-card"
import foodImg from "@/../public/food2.png"
import { adminAPI } from "@/lib/api"
import DonationDetailModal from "@/components/donation-detail-modal"

const Donations = () => {
  const [donations, setDonations] = useState<ActivityCardProps[]>([])
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

  return (
    <div className="w-full h-full px-4">
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold mb-5">Donations</h1>
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5 justify-items-center">
          {donations.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500">No donations found</div>
          ) : (
            donations.map((item) => (
              <div key={item._id} onClick={() => setSelectedDonation(item)} className="cursor-pointer">
                <ActivityCard {...item} />
              </div>
            ))
          )}
        </div>
      )}
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
