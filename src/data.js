import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "./assets/tools/vscode.png";
import Tools2 from "./assets/tools/reactjs.png";
import Tools3 from "./assets/tools/Laravel.png";
import Tools4 from "./assets/tools/tailwind.png";
import Tools5 from "./assets/tools/ci.png";
import Tools6 from "./assets/tools/js.png";
import Tools7 from "./assets/tools/nodejs.png";
import Tools8 from "./assets/tools/github.png";
import Tools9 from "./assets/tools/AM.png";
import Tools10 from "./assets/tools/canva.png";
import Tools11 from "./assets/tools/figma.png";
import Tools12 from "./assets/tools/CapCut.png";
import Tools13 from "./assets/tools/sqlsr.png";
import Tools14 from "./assets/tools/html.png";
import Tools15 from "./assets/tools/css.png";
import Tools16 from "./assets/tools/potsgre.png";
import Tools17 from "./assets/tools/php.png";
import Tools18 from "./assets/tools/vite.png";
import Tools19 from "./assets/tools/mysql.png";
import Tools20 from "./assets/tools/python.png";

export const listExperience = [
  {
    id: 1,
    role: "Departement Operasional",
    company: "Pt Alter Teknologi",
    period: "September 2025 - November 2025",
    descriptions: [
      "Mengembangkan aplikasi mobile untuk digitalisasi dan pemantauan aset operasional secara remote.",
      "Melakukan monitoring jaringan dan penanganan kendala teknis (remote support) secara daring."
    ]
  },
  {
    id: 2,
    role: "Lembaga Kursus dan Pelatihan Elektronika",
    company: "Smk Negeri 1 Bulakamba",
    period: "Tahun 2023",
    descriptions: [
      "Melakukan perakitan komponen elektronika pada papan sirkuit (PCB) menggunakan teknik soldering presisi sesuai standar industri.",
      "Mendiagnosis dan memperbaiki kerusakan perangkat audio-video (TV, Amplifier, Speaker) untuk memulihkan fungsi operasional.",
      "Mengembangkan sistem kendali otomatis berbasis IoT melalui pemrograman mikrokontroler dan integrasi sensor cerdas."
    ]
  }
];

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "CodeIgniter",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Alight Motion",
    ket: "Video Editing App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "CapCut",
    ket: "Video Editing App",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "SQL Server",
    ket: "Database",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "PotsgreSQL",
    ket: "Database",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Database",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Python",
    ket: "Language",
    dad: "2000",
  },
];

import Proyek1 from "./assets/proyek/proyek1.png";
import Proyek2 from "./assets/proyek/proyek2.png";
import Proyek3 from "./assets/proyek/proyek3.png";
import Proyek4 from "./assets/proyek/proyek4.png";
import Proyek5 from "./assets/proyek/proyek5.png";
import Proyek6 from "./assets/proyek/proyek6.png";
import { terminate } from "firebase/firestore";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "SIGAP",
    subtitle: "Website pelaporan gangguan dan anggaran perbaikan...",
    fullDescription:"Sistem Informasi Gangguan & Anggaran Perbaikan (SIGAP) adalah aplikasi berbasis web yang dikembangkan sebagai produk luaran Tugas Akhir Uas. Aplikasi ini bertujuan untuk menjembatani komunikasi antara warga dengan perangkat desa dalam hal pelaporan masalah infrastruktur, pelayanan, keamanan, dan administrasi.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/XhuuLL/Sistem-Pengaduan-Masyarakat.git",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "System Akademik",
    subtitle: "Web Sistem Informasi Akademik (SIAKAD) Digital adalah portal...",
    fullDescription:"Web Sistem Informasi Akademik (SIAKAD) Digital adalah portal akademik terintegrasi yang digunakan untuk mengelola dan mengakses layanan perkuliahan secara online. Platform ini menyediakan informasi akademik secara real-time, aman, dan efisien, memungkinkan mahasiswa dan civitas akademika terhubung dengan layanan kampus kapan saja (24/7). Melalui web ini, pengguna dapat masuk akun, mengakses informasi akademik, serta memperoleh layanan kampus dalam satu sistem terpadu.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/XhuuLL/Ceritane-Siakad_CI_3.git",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Support Vector Machine",
    subtitle: "Dashboard Sistem Pendukung Keputusan (SPK) berbasis SVM untuk...",
    fullDescription:"Project ini merupakan dashboard Sistem Pendukung Keputusan (SPK) berbasis Support Vector Machine (SVM) yang digunakan untuk menentukan prioritas wilayah berdasarkan data status gizi balita. Sistem mengelompokkan wilayah ke dalam prioritas tinggi, sedang, dan rendah dengan menganalisis indikator seperti stunting, wasting, underweight, dan obesitas. Hasil analisis ditampilkan dalam bentuk statistik ringkasan, diagram persentase, dan tabel wilayah prioritas, sehingga membantu pengambil kebijakan dalam menentukan fokus intervensi kesehatan secara lebih tepat dan berbasis data.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/XhuuLL/ML-SVM.git",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Coffe Shop Web",
    subtitle: "Web Ilkom Coffee merupakan website pemesanan kopi yang menampilkan...",
    fullDescription:"Web Ilkom Coffee merupakan website pemesanan kopi yang menampilkan pengalaman kopi artisan dengan kualitas premium. Website ini menyediakan informasi menu kopi, layanan pemesanan online, serta pembaruan pesanan terbaru. Dengan tampilan visual yang menarik dan navigasi sederhana, Ilkom Coffee memudahkan pelanggan—khususnya komunitas akademik—untuk mengenal produk dan melakukan pemesanan kopi secara cepat dan nyaman.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/XhuuLL/Coffe-Web.git",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Digital Cash App",
    subtitle: "Web Digital Cash Book adalah sistem manajemen keuangan yang dirancang untuk...",
    fullDescription:"Web Digital Cash Book adalah sistem manajemen keuangan yang dirancang untuk membantu pengelolaan pemasukan dan pengeluaran kas RT/RW secara transparan, modern, dan real-time. Platform ini memungkinkan warga mengakses laporan keuangan kapan saja, meningkatkan kepercayaan melalui keterbukaan data, serta memudahkan pencatatan dan pelaporan keuangan secara digital dan terintegrasi.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/XhuuLL/Digital-cash-book.git",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "BEM-KM-FT",
    subtitle: "Web BEM-KM-FT merupakan platform informasi dan komunikasi resmi milik...",
    fullDescription:"Web BEM-KM-FT merupakan platform informasi dan komunikasi resmi milik Badan Eksekutif Mahasiswa Keluarga Mahasiswa Fakultas Teknik (BEM-KMFT) yang dirancang untuk mendukung kegiatan organisasi kemahasiswaan. Website ini menyediakan berbagai informasi penting seperti profil kepengurusan, program kerja, kegiatan mahasiswa, berita fakultas, serta layanan aspirasi. Dengan tampilan yang modern dan sistem yang mudah digunakan, website ini bertujuan menjadi pusat informasi digital yang efektif, transparan, dan interaktif bagi seluruh mahasiswa Fakultas Teknik.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/XhuuLL/BEM-KM-FT.git",
    dad: "600",
  },
];

import sertifikat1 from "./assets/sertifikat/sertifikat1.png";
import sertifikat2 from "./assets/sertifikat/sertifikat2.png";
import sertifikat3 from "./assets/sertifikat/sertifikat3.png";

export const listSertifikat = [
  {
    id: 1,
    image: sertifikat1,
    title: "Sertifikat Kemalasan Digital",
    issuer: "Imphnen",
    url: "",
  },
  {
    id: 2,
    image: sertifikat2,
    title: "Linux Dasar untuk Pemula",
    issuer: "Id Network Academy",
    url: "",
  },
  {
    id: 3,
    image: sertifikat3,
    title: "Python Dasar untuk Pemula",
    issuer: "Study Club",
    url: "",
  },
];
