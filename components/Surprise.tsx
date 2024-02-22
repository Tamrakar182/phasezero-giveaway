"use client";
import Lottie from "react-lottie";
import animationData from "@/public/lotties/gift.json";
import Stats from "./Stats";
import { useMediaQuery } from 'react-responsive';

interface GiftBoxProps {
  onClick: () => void;
  description: string;
  entries: string;
  total: string;
  height: number;
  width: number;
  worth: string;
  soldOut?: boolean;
}

export default function GiftBox({
  onClick,
  description,
  total,
  entries,
  height,
  width,
  worth,
  soldOut,
}: GiftBoxProps) {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div
      className="w-auto h-auto p-0 sm:p-4 bg-transparent cursor-pointer text-lg self-center grid place-content-center text-white"
      onClick={onClick}
    >
      <div className="flex sm:flex-row lg:flex-col items-center justify-center">
        <div className="w-[200px] h-[200px] mg:w-[250px] md:h-[250px] flex flex-col items-start justify-center">
          <Lottie options={defaultOptions} height={isLargeScreen ? height + 50 : height} width={isLargeScreen ? width + 50 : width} />
        </div>
        {soldOut ?
          <div className="bg-transparent min-w-[130px]">
            <div className="mx-auto max-w-7xl">
              <div className=" bg-white/5 text-center">
                <div
                  className={`bg-transparent px-4 py-6 sm:px-6 lg:px-6 text-center`}
                >
                  <p className="text-1xl font-medium leading-6 text-gray-400 ">
                    Sold Out
                  </p>
                </div>
              </div>
            </div>
          </div>
          : <Stats
            stats={[
              { name: "Entries", value: `${entries}/${total}` },
              { name: "Price", value: description },
              { name: "Worth", value: worth },
            ]}
          />}
      </div>
    </div>
  );
}
