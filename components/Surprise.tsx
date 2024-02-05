"use client";
import { useState } from "react";
import Lottie from 'react-lottie';
import animationData from '@/public/lotties/giftbox.json';

interface GiftBoxProps {
    onClick: () => void;
    description: string;
}


export default function GiftBox({ onClick, description }: GiftBoxProps) {
    const [hover, setHover] = useState(false);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div
            className={`grid place-content-center border border-gray-500 p-3`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setHover(!hover)}
        >
            <div className="w-[200px] h-[200px] bg-transparent cursor-pointer">
                <div className='relative w-full h-full'>

                    {hover ? <div className="absolute w-full h-full bg-[#232424] bg-opacity-95 overflow-hidden flex flex-col justify-center items-center">
                        <p className="text-white text-lg">{description}</p>
                        <button
                            className="border-2 border-white px-4 py-2 mt-4 text-white font-bold uppercase"
                            onClick={onClick}
                        >
                            Open
                        </button>
                    </div> :
                        <div className="absolute">
                            <Lottie options={defaultOptions} height={200} width={200} />
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}