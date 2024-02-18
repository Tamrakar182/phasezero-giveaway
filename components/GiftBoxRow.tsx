import GiftBox from "@/components/Surprise";

interface GiftBoxRowProps {
    handleGiftClick: (value: number) => void;
}

export default function GiftBoxRow({ handleGiftClick }: GiftBoxRowProps) {
    return (
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
        </div>
    );
}