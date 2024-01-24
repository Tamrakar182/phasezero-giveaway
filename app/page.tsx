"use client";
import { useState } from "react";
import GiftBox from "@/components/giftbox";
import FormModal from "@/components/modal";

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
    <main className="flex min-h-screen flex-col items-center p-24 bg-black-100 content-container">
      <h1 className="text-5xl font-bold uppercase">Giveaway</h1>
      <p className="text-xl text-slate-500 text-center">Click one of these boxes to enter the giveaway</p>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[760px] my-4">
        <div>
          <GiftBox onClick={() => handleGiftClick(20)} />
          <p className="text-xl text-center">Rs. 20</p>
        </div>
        <div>
          <GiftBox onClick={() => handleGiftClick(40)} />
          <p className="text-xl text-center">Rs. 40</p>
        </div>
        <div>
          <GiftBox onClick={() => handleGiftClick(60)} />
          <p className="text-xl text-center">Rs. 60</p>
        </div>
      </div>
      <FormModal open={open} setOpen={handleModalClick} giftValue={giftValue} />
    </main>
  );
}
