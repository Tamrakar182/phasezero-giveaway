"use client";
import Lottie from 'react-lottie';
import animationData from '@/public/lotties/giftbox.json';

interface GiftBoxProps {
    onClick: () => void;
    description: string;
}


export default function GiftBox({ onClick, description }: GiftBoxProps) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div
            className={`grid place-content-center border bg-[#090909] border-stone-300 rounded-3xl p-3`}
        >
            <div className="w-[200px] h-[200px] bg-transparent cursor-pointer group perspective-1000">
                <div className='relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-500'>
                    <div className="absolute">
                        <Lottie options={defaultOptions} height={200} width={200} />
                    </div>
                    <div className="absolute rotate-y-180 w-full h-full bg-[#0F1823] bg-opacity-95 rounded-3xl overflow-hidden space-y-5 backface-hidden flex flex-col justify-center items-center">
                        <p className="text-white text-lg">{description}</p>
                        <button
                            className="bg-[#131313] border-2 border-white rounded-full px-4 py-2 mt-4 text-white font-bold uppercase"
                            onClick={onClick}
                        >
                            Open
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}