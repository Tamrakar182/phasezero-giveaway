"use client";

import { useEffect } from "react";

function Page() {
  useEffect(() => {
    postData();
  }, []);
  const postData = async () => {
    // get data from query params
    // send get request to backend api/v1/esewa/success?data=queryData
    // when you get response from backend
    // send user to landing page
  };
  return <div>payment success</div>;
}

export default Page;
