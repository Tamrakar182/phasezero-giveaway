"use client";
import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from '@/public/lotties/giftbox.json';

interface GiftBoxProps {
    onClick: () => void;
    description: string;
    remaining: string;
}


export default function GiftBox({ onClick, description, remaining }: GiftBoxProps) {
    // const [hover, setHover] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div
            className={`grid place-content-center`}
            onClick={onClick}
        >
            <div className="w-[200px] h-[200px] bg-transparent cursor-pointer">
                <div className='relative w-full h-full'>
                    <div className="absolute">
                        <Lottie options={defaultOptions} height={200} width={200} />
                        <p className="text-white text-lg text-center">Remaining: {remaining} </p>
                        <p className="text-white text-lg text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}