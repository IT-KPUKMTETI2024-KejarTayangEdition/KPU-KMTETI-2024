import {ComingSoon} from "@/common/components/coming-soon";
import Image from "next/image";
import imgPattern from "../../common/constant/about/about-pattern.svg"
import imgPatternMerge from "../../common/constant/about/about-pattern-merge.svg"
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
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>PEMILIHAN UMUM</h1>
          <h1>KMTETI 2024</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-center" text={text.section1} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 2 */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>PEMILIHAN UMUM</h1>
          <h1>KMTETI 2024</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-center" text={text.section1} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 3 */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>PEMILIHAN UMUM</h1>
          <h1>KMTETI 2024</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-center" text={text.section1} />
      </div>
      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPatternMerge} />

      {/* Section 4: Swiper */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col h-auto justify-center items-center">
        <div className={`mb-4 md:mb-6 lg:mb-8 flex flex-col items-center ${dalekpinpoint.className} text-primary-light text-2xl md:text-4xl lg:text-5xl`}>
          <h1>PEMILIHAN UMUM</h1>
          <h1>KMTETI 2024</h1>
        </div>  
        <CardView pad="p-4" className="w-5/6 md:w-4/6 lg:w-4/6 text-sm md:text-base lg:text-lg text-center" text={text.section1} />
      </div>

      <Image className="mt-12 lg:mt-24" style={preventImageDrag} src={imgPattern} />
    </div>
  )
}