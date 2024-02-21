import GiftBox from "@/components/Surprise";

interface GiftBoxRowProps {
    handleGiftClick: (value: number) => void;
}

export default function GiftBoxRow({ handleGiftClick }: GiftBoxRowProps) {
    // backend call to get the remaining count of each gift

    const handleBoxClick = (value: number) => {
        // check entries against total and show sold out if needed
        handleGiftClick(value);
    }

    return (
        <div className="flex flex-col gap-20 lg:flex-row items-center justify-center w-full max-w-[768px] pt-12">
            <GiftBox
                onClick={() => handleBoxClick(9)}
                description="Rs. 9"
                // we get this from backend
                entries="0"
                total="2024"
                height={125}
                width={125}
                worth={"Rs. 5,000"}
            />
            <GiftBox
                onClick={() => handleBoxClick(29)}
                description="Rs. 29"
                entries="0"
                total="400"
                height={150}
                width={150}
                worth={"Rs. 10,000"}
            />
            <GiftBox
                onClick={() => handleBoxClick(99)}
                description="Rs. 99"
                entries="0"
                total="200"
                height={175}
                width={175}
                worth={"Rs. 15,000"}
            />
        </div>
    );
}