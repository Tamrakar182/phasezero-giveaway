"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/public/lotties/giftbox.json";
import Stats from "./Stats";

interface GiftBoxProps {
  onClick: () => void;
  description: string;
  remaining: string;
}

export default function GiftBox({
  onClick,
  description,
  remaining,
}: GiftBoxProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div
      className="w-[200px] h-[200px] p-4 bg-transparent cursor-pointer text-lg  grid place-content-center text-white"
      onClick={onClick}
    >
      <div className="flex sm:flex-row lg:flex-col items-center justify-center">
        <Lottie options={defaultOptions} height={200} width={200} />
        <Stats />
      </div>
    </div>
  );
}
