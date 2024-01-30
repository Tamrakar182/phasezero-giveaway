"use client";
import { useState } from "react";
import GiftBox from "@/components/Surprise"
import FormModal from "@/components/modal";
import TimerCountdown from "@/components/Counter";

export default function Home() {
  const [open, setOpen] = useState(false)
  const [giftValue, setGiftValue] = useState(0)

  const handleModalClick = (setValue: boolean) => {
    setOpen(setValue)
  }

  const handleGiftClick = (value: number) => {
    handleModalClick(true)
    setGiftValue(value)
  }


  return (
    <div className="h-full w-full ">
      <main className="flex min-h-[90vh] flex-col items-center px-24 pt-20 content-container">
        <TimerCountdown />
        <FormModal open={open} setOpen={handleModalClick} giftValue={giftValue} />
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center w-full max-w-[768px] mt-12">
          <GiftBox onClick={() => handleGiftClick(20)} description="Rs. 20" />
          <GiftBox onClick={() => handleGiftClick(40)} description="Rs. 40" />
          <GiftBox onClick={() => handleGiftClick(60)} description="Rs. 60" />
        </div>
      </main>
    </div>
  );
}
