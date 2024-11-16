import React from "react";
import ReportButton from "@/common/constant/laporkan/ReportButton";
import Image from "next/image";

const reportTypes = [
  {
    text: "Pelaporan Media Kampanye",
    className: "self-start",
    href: "https://bit.ly/PelaporanMediaKampanyeKPUKMTETI2024"
  },
  {
    text: "Pelaporan Pembuatan Akun Medsos",
    className: "",
    href: "https://bit.ly/PelaporanPembuatanAkunMedsosKPUKMTETI2024"
  },
  {
    text: "Pengaduan Pelanggaran Kampanye",
    className: "self-end",
    href: "http://bit.ly/PengaduanPelanggaranKampanye2024"
  }
];

function ReportingPage() {
  return (
    <main className="flex flex-col text-5xl rounded-none text-yellow-950 max-md:text-4xl">
      <section className="flex relative flex-col justify-center items-center px-20 py-44 w-full min-h-[1060px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl">
        <Image
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/37cb4b8dc29c608dec92e7f2a23370486eccb00dfaa71856e5c8c0a391cf136a?placeholderIfAbsent=true&apiKey=22e29311379644cabaabda6a2d09ec99"
          className="object-cover absolute inset-0 size-full"
          alt="Background image for reporting page"
        />
        <div className="flex relative flex-col mb-0 ml-3.5 w-full max-w-[1535px] max-md:mb-2.5 max-md:max-w-full max-md:text-4xl">
          <h1 className="self-center text-8xl font-bold text-orange-200 max-md:max-w-full max-md:text-4xl">
            Ajukan Laporan
          </h1>
          <div className="flex flex-col mt-20 max-md:mt-10">
            {reportTypes.map((report, index) => (
              <ReportButton
                key={index}
                text={report.text}
                className={report.className}
                href={report.href}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ReportingPage;