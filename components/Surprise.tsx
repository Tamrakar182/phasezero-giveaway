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
}

export default function GiftBox({
  onClick,
  description,
  remaining,
  height,
  width,
  worth,
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
        <Stats
          stats={[
            { name: "Entries", value: `0/${remaining}` },
            { name: "Price", value: description },
            { name: "Worth", value: worth },
          ]}
        />
      </div>
    </div>
  );
}
