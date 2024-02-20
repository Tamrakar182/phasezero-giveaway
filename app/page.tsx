"use client";
import { useState, useMemo, useEffect } from "react";
import FormModal from "@/components/Modal";
import TimerCountdown from "@/components/Counter";
import Masonry from "@/components/Masonry";
import GiftBoxRow from "@/components/GiftBoxRow";
import Spinner from "@/components/Spinner";

// initial date for until masonry must be shown
const targetedDate = "Feb 23, 2024 00:00:00";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [giftValue, setGiftValue] = useState<number>(0);
  const [data, setData] = useState<any>({
    date: "",
    desc: "",
  });

  const targetReached = useMemo(() => {
    return new Date().getTime() >= new Date(targetedDate).getTime();
  }, []);

  useEffect(() => {
    setData({
      date: targetReached ? "Feb 29, 2024 17:55:00" : targetedDate,
      desc: targetReached
        ? "Winner will be picked on: "
        : "Entries will be starting from:",
    });
  }, [targetReached]);

  const handleModalClick = (setValue: boolean) => {
    setOpen(setValue);
  };

  const handleGiftClick = (value: number) => {
    handleModalClick(true);
    setGiftValue(value);
  };

  // make loading beautiful
  if (data.date === "") return (
    <div className="h-full w-full ">
      <main className="flex min-h-[90vh] flex-col items-center px-4 sm:px-24 py-4 justify-center">
        <Spinner />
      </main>
    </div>
  );

  return (
    <div className="h-full w-full ">
      <main className="flex min-h-[90vh] flex-col items-center px-4 sm:px-24 py-4 content-container">
        <TimerCountdown target={data} />
        <FormModal
          open={open}
          setOpen={handleModalClick}
          giftValue={giftValue}
        />
        {targetReached ? (
          <GiftBoxRow handleGiftClick={handleGiftClick} />
        ) : (
          <Masonry />
        )}
      </main>
    </div>
  );
}
