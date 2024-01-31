"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function Page() {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  useEffect(() => {
    if (data) postData(data);
  }, [data]);

  const postData = async (data: string) => {
    // get data from query params
    // send
    const url = `http://localhost:8000/api/v1/esewa/success?data=${data}`;
    try {
      const response = await axios.get(url);
      if (response?.status === 200) {
        // redirect user to landing page
        console.log(response.data);
      } else {
        console.error("Failed to create order");
      }
    } catch (error) {
      console.log(error);
    }
    // when you get response from backend
    // send user to landing page
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-white">Sucessful Payment!</h1>
      <p className="text-small-regular text-gray-400">
        Successfully Purchased the GiftBox
      </p>
      <Link href="/" className="mt-4 underline text-base-regular text-white">
        Go to frontpage
      </Link>
    </div>
  );
}

export default Page;
