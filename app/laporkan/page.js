import React from "react";
import {dalekpinpoint} from "@/styles/font";
import Link from "next/link";

const reportTypes = [
  {
    text: "Konfirmasi Pembuatan Akun Medsos",
    className: "self-center",
    href: "https://bit.ly/PelaporanPembuatanAkunMedsosKPUKMTETI2024"
  },
  {
    text: "Pengaduan Pelanggaran Kampanye",
    className: "self-center",
    href: "http://bit.ly/PengaduanPelanggaranKampanye2024"
  }
];

export default function ReportingPage() {
  return (
    <main className="flex flex-col w-screen text-5xl rounded-none max-md:text-4xl">
      <section className="flex relative flex-col justify-center items-center px-20 py-16 w-full">
        <div className="flex text-center md:justify-center relative ml-3.5 w-full mb-2.5">
          <h1 className={`text-primary-light md:text-8xl font-bold text-6xl ${dalekpinpoint.className}`}>
            Ajukan Laporan
          </h1>
        </div>
        <div className="flex flex-col md:mt-10 mt-10 justify-center w-full items-center">
          {reportTypes.map((report, index) => (
            <ReportButton
              key={index}
              index={index}
              text={report.text}
              className={report.className}
              href={report.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function ReportButton({ text, className, href }) {
  return (
    <Link href={href} className={`md:px-16 md:py-5 md:mt-16 max-w-full text-center bg-primary-dark rounded-3xl border-4 border-woodbrown text-woodbrown w-[728px] px-5 py-5 mt-10 text-4xl ${className}`}>
      {text}
    </Link>
  );
}