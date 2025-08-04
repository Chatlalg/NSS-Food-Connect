"use client"

import Image from "next/image"
import { StaticImageData } from "next/image";

type ActivityCardProps = {
  _id: string;
  volunteer: string;
  mess: string;
  image: StaticImageData;
}

const ActivityCard = (item: ActivityCardProps) => {
  return (
    <div className="w-80 relative rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white">
      <Image
        src={item.image}
        alt="Activity image"
        className="w-full h-48 object-cover"
      />
      <div className="py-4 border-t border-gray-200 px-4">
        <h2 className="text-lg font-semibold text-center text-gray-800">
          Volunteer: {item.volunteer}
        </h2>
        <h3 className="text-md text-center text-gray-600">
          Mess: {item.mess}
        </h3>
      </div>
    </div>

  )
}

export default ActivityCard
export type { ActivityCardProps }