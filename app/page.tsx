"use client";
import { useState, useMemo } from "react";
import FormModal from "@/components/Modal";
import TimerCountdown from "@/components/Counter";
import Masonry from "@/components/Masonry";
import GiftBoxRow from "@/components/GiftBoxRow";

// initial date for until masonry must be shown
const targetedDate = 'Feb 28, 2024 00:00:00';

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [giftValue, setGiftValue] = useState<number>(0);

  const targetReached = useMemo(() => {
    return new Date().getTime() >= new Date(targetedDate).getTime();
  }, []);

  const date = useMemo(() => {
    // new date for when giftboxes should be shown
    return targetReached ? 'Mar 31, 2024 00:00:00' : targetedDate;
  }, [targetReached]);

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
        <TimerCountdown target={date} />
        <FormModal
          open={open}
          setOpen={handleModalClick}
          giftValue={giftValue}
        />
        {targetReached ? <GiftBoxRow handleGiftClick={handleGiftClick} /> : <Masonry />  }
      </main>
    </div>
  );
}
