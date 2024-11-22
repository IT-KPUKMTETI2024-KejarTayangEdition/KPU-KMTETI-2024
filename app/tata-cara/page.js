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
    <div className="md:panduan-wrapper flex justify-center items-center">
      {isPdfSupported ? (
        <object
          data="/tatacara.pdf"
          type="application/pdf"
          className="md:w-full md:h-[90vh] lg:max-w-[100%] min-h-screen h-[50vh] w-[50vh]"
        >
          <p className="download-pdf text-center min-h-screen min-w-screen">
            Unable to display PDF file. <a href="/tatacara.pdf" className="text-blue-500 underline">Download</a>{" "}
            instead.
          </p>
        </object>
      ) : (
        <p className="download-pdf text-center min-h-screen min-w-screen">
          Unable to display PDF file. <a href="/tatacara.pdf" className="text-blue-500 underline">Download</a>{" "}
          instead.
        </p>
      )}
    </div>
  );
};

export default Page;
