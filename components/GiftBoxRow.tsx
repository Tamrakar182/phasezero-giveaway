import GiftBox from "@/components/Surprise";

interface GiftBoxRowProps {
    handleGiftClick: (value: number) => void;
}

export default function GiftBoxRow({ handleGiftClick }: GiftBoxRowProps) {
    // backend call to get the remaining count of each gift
    return (
        <div className="flex flex-col gap-20 lg:flex-row items-center justify-center w-full max-w-[768px] pt-12">
            <GiftBox
                onClick={() => handleGiftClick(9)}
                description="Rs. 9"
                remaining="2024"
                height={125}
                width={125}
                worth={"Rs. 5,000"}
            />
            <GiftBox
                onClick={() => handleGiftClick(29)}
                description="Rs. 29"
                remaining="400"
                height={150}
                width={150}
                worth={"Rs. 10,000"}
            />
            <GiftBox
                onClick={() => handleGiftClick(99)}
                description="Rs. 99"
                remaining="200"
                height={175}
                width={175}
                worth={"Rs. 15,000"}
            />
        </div>
    );
}