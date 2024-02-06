import { useState, useEffect } from "react";
import { generateTimeDisplay, TimeDisplayValues } from "@/utils/dateGenerator";

interface CounterProp {
  displayValue: string;
  label: string;
}

const Counter = ({ displayValue, label }: CounterProp) => (
  <div className="flex flex-col font-bold text-center text-white p-[2vw] pt-0">
    <span className="text-8xl">{displayValue}</span>
    <h2 className="text-center text-[clamp(1.5rem, 1vw, 99rem)] font-bold tracking-wider overflow-hidden overflow-ellipsis whitespace-nowrap w-full">
      {label}
    </h2>
  </div>
);

const target = `Feb 29, 2024 00:00:00`;

const TimerCountdown = () => {
  const targetDate = new Date(target).getTime();

  const [timeDisplay, setTimeDisplay] = useState<TimeDisplayValues>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(
      () => setTimeDisplay(generateTimeDisplay(targetDate)),
      1000
    );
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex border rounded-3xl border-gray-500 justify-center max-w-[768px]">
      <section className="m-auto p-4 md:px-9 md:py-7 text-center b">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-x-8">
          <Counter displayValue={timeDisplay.days} label={"Days"} />
          <Counter displayValue={timeDisplay.hours} label={"Hours"} />
          <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
          <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
        </div>
        <h2 className="w-full text-center text-gray-400 text-[clamp(1.5rem, 2vw, 99rem)] font-light tracking-wider overflow-hidden overflow-ellipsis whitespace-nowrap w-fit">
          Winner will be picked on: {target}
        </h2>
      </section>
    </div>
  );
};

export default TimerCountdown;
