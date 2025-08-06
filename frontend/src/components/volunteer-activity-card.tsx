// 'use client'
// import React from 'react'
// import Image, { StaticImageData } from 'next/image'

// type ActivityCardProps = {
//     _id: string;
//     tokens: number;
//     img_src: StaticImageData;
//     mess: string;
//     date: string;
//     isActive: boolean;
// }

// const ActivityCard = ({ props }: { props: ActivityCardProps }) => {
//     return (
//         <div className={`${props.isActive == true ? "bg-red-100 border-red-400" : "bg-green-100 border-green-400"} border  rounded-xl shadow px-4 py-3 w-full max-w-sm mx-auto`}>

//             <div className={`${props.isActive == true ? "text-red-900" : "text-green-900"} text-sm text-right font-semibold mb-1`}>
//                 {props.tokens} Tokens
//             </div>

//             <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 relative rounded-lg overflow-hidden shrink-0">
//                     <Image src={props.img_src} alt="image of food" fill objectFit="cover" />
//                 </div>
//                 <p className="text-xl font-bold text-gray-900 flex-1 ">
//                     {props.mess}
//                 </p>
//             </div>

//             <div className="text-md text-right text-gray-700 mt-2">
//                 {props.date}
//             </div>
//         </div>
//     )
// }

// export type { ActivityCardProps }
// export default ActivityCard


// design changes

'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Calendar, Award } from 'lucide-react' // Icons for better UI

// The props definition remains the same
export type ActivityCardProps = {
    _id: string;
    tokens: number;
    img_src: StaticImageData;
    mess: string;
    date: string;
    isActive: boolean;
}

const ActivityCard = ({ props }: { props: ActivityCardProps }) => {
    // Determine styles based on the isActive prop for easier management
    const statusStyles = props.isActive 
        ? {
            borderColor: 'border-yellow-400', // A warning/pending yellow
            badgeBg: 'bg-yellow-100',
            badgeText: 'text-yellow-800'
          }
        : {
            borderColor: 'border-green-500', // A success/completed green
            badgeBg: 'bg-green-100',
            badgeText: 'text-green-800'
          };

    return (
        <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 duration-300 ease-in-out border-t-4 ${statusStyles.borderColor}`}>
            
            {/* Image Section */}
            <div className="relative w-full h-44">
                <Image 
                    src={props.img_src} 
                    alt={`Food from ${props.mess}`} 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>

            {/* Content Section */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-[#333333] truncate mb-3" title={props.mess}>
                    {props.mess}
                </h3>
                
                {/* Info Row with Icons */}
                <div className="flex justify-between items-center text-gray-500 text-sm mb-5">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{props.date}</span>
                    </div>
                    <div className="flex items-center font-semibold text-amber-600">
                        <Award className="w-4 h-4 mr-1.5" />
                        <span>{props.tokens} Tokens</span>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusStyles.badgeBg} ${statusStyles.badgeText}`}>
                        {props.isActive ? "Pending" : "Completed"}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard