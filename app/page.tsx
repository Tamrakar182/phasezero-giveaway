import GiftBox from "@/components/giftbox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black-100 content-container">
      Giveaway
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <GiftBox />
        <GiftBox />
        <GiftBox />
      </div>

    </main>
  );
}
