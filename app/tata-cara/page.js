"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [isPdfSupported, setIsPdfSupported] = useState(true);

  useEffect(() => {
    const obj = document.createElement("object");
    obj.type = "application/pdf";
    setIsPdfSupported(obj.type === "application/pdf");
  }, []);

  return (
    <div className="w-full flex md:w-full flex-col items-center justify-center p-2 h-full text-justify">
        <div className="mt-2 w-full flex justify-center">
            <iframe
              src={`https://drive.google.com/file/d/1V2mKpvd4_bQiNg4yXQdxRlen5q0uNaTl/preview`}
              
              height="1000px"
              frameBorder="0"
              className="rounded-lg shadow-lg mt-2 md:w-[60%] w-full justify-center"
            ></iframe>
        </div>
    </div>
  );
};

export default Page;
