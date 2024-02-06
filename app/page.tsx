"use client";
import { useState } from "react";
import GiftBox from "@/components/Surprise";
import FormModal from "@/components/Modal";
import TimerCountdown from "@/components/Counter";
import Masonry from "@/components/Masonry";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [giftValue, setGiftValue] = useState(0);

  const handleModalClick = (setValue: boolean) => {
    setOpen(setValue);
  };

  const handleGiftClick = (value: number) => {
    handleModalClick(true);
    setGiftValue(value);
  };

  return (
    <div className="h-full w-full ">
      <main className="flex min-h-[90vh] flex-col items-center px-4 sm:px-24 py-4 content-container">
        <TimerCountdown />
        <FormModal
          open={open}
          setOpen={handleModalClick}
          giftValue={giftValue}
        />
        <div className=" lg:mt-16 flex flex-col gap-20 lg:flex-row justify-between items-center w-full max-w-[768px] pt-12">
          <GiftBox
            onClick={() => handleGiftClick(20)}
            description="Rs. 9"
            remaining="2024"
          />
          <GiftBox
            onClick={() => handleGiftClick(40)}
            description="Rs. 29"
            remaining="400"
          />
          <GiftBox
            onClick={() => handleGiftClick(60)}
            description="Rs. 99"
            remaining="200"
          />
          {/* <GiftBox onClick={() => handleGiftClick(60)} description="Rs. 999" /> */}
        </div>
        {/* <div className="w-full grid place-content-center text-white text-3xl my-6">
          <h1>Phases of Phase Zero</h1>
        </div>
        <Masonry /> */}
      </main>
    </div>
  );
}
