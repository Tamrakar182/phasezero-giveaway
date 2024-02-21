"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/public/lotties/gift.json";
import Stats from "./Stats";

interface GiftBoxProps {
  onClick: () => void;
  description: string;
  remaining: string;
  height: number;
  width: number;
  worth: string;
  soldOut?: boolean;
}

export default function GiftBox({
  onClick,
  description,
  remaining,
  height,
  width,
  worth,
  soldOut,
}: GiftBoxProps) {
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
        <div className="w-[175px] h-[175px] flex flex-col items-start justify-center">
          <Lottie options={defaultOptions} height={height} width={width} />
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
              { name: "Entries", value: `0/${remaining}` },
              { name: "Price", value: description },
              { name: "Worth", value: worth },
            ]}
          />}
      </div>
    </div>
  );
}
