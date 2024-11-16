import React from "react";
import { Link } from "react-router-dom";

function ReportButton({ text, className, href }) {
  return (
    <Link
      to={href}
      className={`px-16 py-5 mt-16 max-w-full text-center bg-orange-300 rounded-3xl border-4 border-yellow-900 border-solid w-[728px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl ${className}`}
    >
      {text}
    </Link>
  );
}

export default ReportButton;