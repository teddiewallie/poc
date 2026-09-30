"use client";

import { Html5QrcodeWrapper } from "@/components/Html5QrcodeWrapper";
import { useState } from "react";

const Page = () => {
  const [result, setResult] = useState("");

  const onScan = (result) => {
    setResult(result);
  };

  return (
    <>
      <Html5QrcodeWrapper {...{ onScan }} />
      <div>{result}</div>
    </>
  )
};

export default Page;

