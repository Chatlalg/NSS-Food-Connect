'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ActivityCardProps = {
    _id: string;
    tokens: number;
    img_src: StaticImageData;
    mess: string;
    date: string;
    isActive: boolean;
}

const ActivityCard = ({ props }: { props: ActivityCardProps }) => {
    return (
        <div className={`${props.isActive == true ? "bg-red-100 border-red-400" : "bg-green-100 border-green-400"} border  rounded-xl shadow px-4 py-3 w-full max-w-sm mx-auto`}>

            <div className={`${props.isActive == true ? "text-red-900" : "text-green-900"} text-sm text-right font-semibold mb-1`}>
                {props.tokens} Tokens
            </div>

            <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative rounded-lg overflow-hidden shrink-0">
                    <Image src={props.img_src} alt="image of food" fill objectFit="cover" />
                </div>
                <p className="text-xl font-bold text-gray-900 flex-1 ">
                    {props.mess}
                </p>
            </div>

            <div className="text-md text-right text-gray-700 mt-2">
                {props.date}
            </div>
        </div>
    )
}

export type { ActivityCardProps }
export default ActivityCard
