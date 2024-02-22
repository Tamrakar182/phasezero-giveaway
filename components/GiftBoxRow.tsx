import GiftBox from "@/components/Surprise";
import { useEffect, useState } from "react";
import { recordData } from "@/utils/apiCalls";

interface GiftBoxRowProps {
    handleGiftClick: (value: number) => void;
}

interface EntriesData {
    _count: {
        _all: string;
    },
    offerType: string;
}

interface SoldOutState {
    Basic?: boolean;
    Gold?: boolean;
    Premium?: boolean;
}


export default function GiftBoxRow({ handleGiftClick }: GiftBoxRowProps) {
    const [entriesData, setEntriesData] = useState<EntriesData[]>([]);
    const [soldOut, setSoldOut] = useState<SoldOutState>({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await recordData();
            setEntriesData(data);

            const soldOut = {
                Basic: parseInt(data.find((entry: any) => entry.offerType === "Basic")?._count._all) >= 2024,
                Gold: parseInt(data.find((entry: any) => entry.offerType === "Gold")?._count._all) >= 400,
                Premium: parseInt(data.find((entry: any) => entry.offerType === "Premium")?._count._all) >= 1,
            };
            setSoldOut(soldOut);
        };

        fetchData();
    }, []);

    const getEntries = (offerType: string) => {
        const entry = entriesData.find(entry => entry.offerType === offerType);
        return entry ? entry._count._all : '0';
    }

    const handleBoxClick = (value: number, total: number, entries: string) => {
        if (total > parseInt(entries)) {
            handleGiftClick(value);
        }
    }

    return (
        <div className="flex flex-col gap-20 lg:flex-row items-center justify-center w-full max-w-[768px] pt-12">
            <GiftBox
                onClick={() => handleBoxClick(9, 2024, getEntries("Basic"))}
                description="Rs. 9"
                entries={getEntries("Basic")}
                total="2024"
                height={125}
                width={125}
                worth={"Rs. 5,000"}
                soldOut={soldOut["Basic"]}
            />
            <GiftBox
                onClick={() => handleBoxClick(29, 400, getEntries("Gold"))}
                description="Rs. 29"
                entries={getEntries("Gold")}
                total="400"
                height={150}
                width={150}
                worth={"Rs. 10,000"}
                soldOut={soldOut["Gold"]}
            />
            <GiftBox
                onClick={() => handleBoxClick(99, 200, getEntries("Premium"))}
                description="Rs. 99"
                entries={getEntries("Premium")}
                total="200"
                height={175}
                width={175}
                worth={"Rs. 15,000"}
                soldOut={soldOut["Premium"]}
            />
        </div>
    );
}