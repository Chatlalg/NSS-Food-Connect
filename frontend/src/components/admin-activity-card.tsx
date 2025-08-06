// "use client"

// import Image from "next/image"
// import { StaticImageData } from "next/image";

// type ActivityCardProps = {
//   _id: string;
//   image: StaticImageData;
//   mess: string;
//   volunteer: string;
//   foodtype: string;
//   donationdate: Date;
//   quantity: string;
//   bestbefore: string;
//   category: string;
//   description: string;
//   imgurl: string;
//   status: string;
// }

// const ActivityCard = (item: ActivityCardProps) => {
//   return (
//     <div className="w-80 relative rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white">
//       <Image
//         src={item.image}
//         alt="Activity image"
//         className="w-full h-48 object-cover"
//       />
//       <div className="py-4 border-t border-gray-200 px-4">
//         <h2 className="text-lg font-semibold text-center text-gray-800">
//           Volunteer: {item.volunteer}
//         </h2>
//         <h3 className="text-md text-center text-gray-600">
//           Mess: {item.mess}
//         </h3>
//       </div>
//     </div>

//   )
// }

// export default ActivityCard
// export type { ActivityCardProps }

//design changes ----------------------------------------------------------------------------------


"use client"

import Image, { StaticImageData } from "next/image";
import { Calendar, Clock, Package, User, UtensilsCrossed } from 'lucide-react';

// The props definition remains the same
export type ActivityCardProps = {
  _id: string;
  image: StaticImageData;
  mess: string;
  volunteer: string;
  foodtype: string;
  donationdate: Date;
  quantity: string;
  bestbefore: string;
  category: string;
  description: string;
  imgurl: string;
  status: string;
}

const ActivityCard = (item: ActivityCardProps) => {
    // Conditional styling for the status badge
    const isPending = item.status === 'pending';
    const statusStyles = isPending
        ? { badgeBg: 'bg-yellow-100', badgeText: 'text-yellow-800' }
        : { badgeBg: 'bg-green-100', badgeText: 'text-green-800' };

    // Helper to format dates consistently
    const formatDate = (date: any) => new Date(date).toLocaleDateString("en-IN");
    const formatTime = (date: any) => new Date(date).toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full flex flex-col h-full">
            
            {/* Image section: Use real image if available, otherwise fallback */}
            <div className="relative w-full h-48">
                <Image
                    src={item.imgurl || item.image}
                    alt={`Food from ${item.mess}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content section */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Header */}
                <h3 className="text-xl font-bold text-[#333333] truncate" title={item.mess}>
                    {item.mess}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mt-1 mb-4">
                    <User className="w-4 h-4 mr-2 shrink-0" />
                    <span>by {item.volunteer}</span>
                </div>

                <div className="border-t border-gray-100 my-1"></div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm text-gray-700 flex-grow mt-3">
                    <div className="flex items-start">
                        <Package className="w-4 h-4 mr-2 mt-0.5 text-gray-400 shrink-0" />
                        <span className="truncate" title={item.quantity}>{item.quantity}</span>
                    </div>
                    <div className="flex items-start">
                        <UtensilsCrossed className="w-4 h-4 mr-2 mt-0.5 text-gray-400 shrink-0" />
                        <span>{item.foodtype}</span>
                    </div>
                    <div className="flex items-start">
                        <Calendar className="w-4 h-4 mr-2 mt-0.5 text-gray-400 shrink-0" />
                        <span>{formatDate(item.donationdate)}</span>
                    </div>
                    <div className="flex items-start">
                        <Clock className="w-4 h-4 mr-2 mt-0.5 text-gray-400 shrink-0" />
                        <span className="truncate" title={new Date(item.bestbefore).toLocaleString()}>Use by {formatTime(item.bestbefore)}</span>
                    </div>
                </div>
                
                {/* Footer with Status Badge */}
                <div className="mt-5 pt-4 border-t border-gray-100 text-right">
                     <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${statusStyles.badgeBg} ${statusStyles.badgeText}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;