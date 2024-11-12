import {ComingSoon} from "@/common/components/coming-soon";
import Image from "next/image";
import imgPattern from "../../common/constant/about/about-pattern.svg"
import CardView from "@/common/components/card-view";
import {dalekpinpoint} from "@/styles/font";

export default function About() {
  const preventImageDrag = {'userDrag' : 'none',
    'WebkitUserDrag' : 'none',
    'MozUserSelect' : 'none',
    'WebkitUserSelect' : 'none',
    'MsUserSelect' : 'none',
    'userSelect' : 'none'
  }
  const text = {
    section1 : "Pemilihan Umum Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada adalah sarana pelaksanaan kedaulatan mahasiswa berdasarkan Anggaran Dasar dan Anggaran Rumah Tangga Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi Fakultas Teknik Universitas Gadjah Mada.",
    section2 : `Komisi Pemilihan Umum Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi, Fakultas Teknik, Universitas Gadjah Mada yang selanjutnya disebut KPU adalah suatu komisi yang menyelenggarakan pemilu berdasarkan Undang-Undang Pemilu. Pada tahun ini KPU KMTETI mengusung tema TEchnocracy. TEchnocracy sendiri memiliki arti “Navigating TETI’s Road to A New Leader” merupakan akronim dari technology dan democracy. TECHNOCRACY menggabungkan inovasi teknologi dan semangat demokrasi yang diwujudkan dalam Pemilihan Ketua KMTETI yang dijalankan secara adil, transparan, dan penuh integritas. Melalui TECHNOCRACY, diharapkan dapat terpilih Ketua KMTETI 2025 yang mampu berdiri di garis depan perubahan dan membawa KMTETI menuju masa depan yang lebih baik dengan semangat keadilan.`,
    section3 : <ol>
      <li>1. Merencanakan, mengkoordinasikan, dan memantau penyelenggaraan pemilu.</li>
      <li>2. Menetapkan, mengkoordinasikan, menyelenggarakan, dan mengendalikan semua tahapan pelaksanaan pemilu.</li>
      <li>3. Menetapkan daftar pemilih.</li>
      <li>4. Menetapkan peserta pemilu.</li>
      <li>5. Merancang SPS.</li>
      <li>6. Menetapkan waktu, tanggal, tata cara pelaksanaan kampanye, dan pemungutan suara.</li>
      <li>7. Mengumumkan Ketua PH KMTETI FT UGM terpilih.</li>
      <li>8. Melakukan evaluasi dan pelaporan pelaksanaan pemilu.</li>
      <li>9. Melaksanakan tugas dan kewenangan yang diatur Undang-Undang Pemilu.</li>
      <li>10. Menyusun peraturan yang belum diatur dalam Undang-Undang Pemilu atas persetujuan Ketua PH KMTETI FT UGM</li>
    </ol>
  }
  return (
    <div className="flex flex-col w-full">
      
      {/* Section 1 */}
      <div className="w-full flex flex-col justify-between min-h-screen">
        <div className="mt-24 flex flex-col items-center justify-evenly">
          <div className={`mb-4 md:mb-10 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-3xl`}>
            <h1>PEMILIHAN UMUM</h1>
            <h1>KMTETI 2024</h1>
          </div>
          <CardView pad="p-4 lg:py-12 lg:px-6" className="w-5/6 md:w-4/6 text-sm md:text-base text-center" text={text.section1} />
        </div>
        <Image style={preventImageDrag} src={imgPattern} />
      </div>

      {/* Section 2 */}
      <div className="w-full flex flex-col justify-between min-h-screen">
        <Image className="transform rotate-180 mobile-s:-mt-[0.3437px]" style={preventImageDrag} src={imgPattern} />
        <div className="flex flex-col items-center justify-evenly">
          <div className={`mb-4 md:mb-10 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-3xl`}>
            <h1>KOMISI PEMILIHAN UMUM</h1>
            <h1>KMTETI 2024</h1>
          </div>
          <CardView pad="py-8 px-4" className="w-4/6 text-base  text-center" text={text.section2} />
        </div>
        <Image style={preventImageDrag} src={imgPattern} />
      </div>

      {/* Section 3 */}
      <div className="w-full flex flex-col justify-between min-h-screen">
        <Image className="transform rotate-180 -mt-[0.5px]" style={preventImageDrag} src={imgPattern} />
        <div className="flex flex-col items-center justify-evenly">
          <div className={`mb-4 md:mb-10 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-3xl`}>
            <h1>TUGAS DAN WEWENANG</h1>
            <h1>KPU KMTETI</h1>
          </div>
          <CardView pad="py-4 px-4" className="w-4/6 text-base text-left" text={text.section3} />
        </div>
        <Image style={preventImageDrag} src={imgPattern} />
      </div>

      {/* Section 4: Swiper */}
      <div className="w-full flex flex-col justify-between min-h-screen">
        <Image className="transform rotate-180 -mt-[0.5px]" style={preventImageDrag} src={imgPattern} />
        <div className="flex flex-col items-center justify-evenly">
          <div className={`mb-4 md:mb-10 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl`}>
            <h1>ORGANIZING COMMITTE</h1>
            <h1>KPU KMTETI 2024</h1>
          </div>
        </div>
        <Image style={preventImageDrag} src={imgPattern} />
      </div>
    </div>
  )
}