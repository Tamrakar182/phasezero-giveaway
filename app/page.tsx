"use client";
import { useState, useMemo, useEffect } from "react";
import FormModal from "@/components/Modal";
import TimerCountdown from "@/components/Counter";
import Masonry from "@/components/Masonry";
import GiftBoxRow from "@/components/GiftBoxRow";
import Spinner from "@/components/Spinner";
import GiftBox from "@/components/Surprise";

// initial date for until masonry must be shown
const targetedDate = "Feb 23, 2024 00:00:00";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [giftValue, setGiftValue] = useState<number>(0);
  const [offerValue, setOfferValue] = useState<string>("");
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
    switch(value) {
      case 9:
        setOfferValue("Basic");
        break;
      case 29:
        setOfferValue("Gold");
        break;
      case 99:
        setOfferValue("Premium");
        break;
      default:
        setOfferValue("");
    }
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
          offerValue={offerValue}
        />
        {targetReached ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <GiftBoxRow handleGiftClick={handleGiftClick} />
            {/* <GiftBox
                onClick={() => handleGiftClick(9999)}
                description="Rs. 9999"
                entries="1"
                total="1"
                height={200}
                width={200}
                worth={"Rs. 1,00,000"}
            /> */}
          </div>
        ) : (
          <Masonry />
        )}
      </main>
    </div>
  );
}
