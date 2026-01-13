import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek, listExperience, listSertifikat } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; 
import Aurora from "./components/Aurora/Aurora";
import { Briefcase, Calendar, Users, Target } from "lucide-react";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; 

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      mirror: true,
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        {/* UBAH WARNA: Aurora menjadi gradasi ungu */}
        <Aurora
          colorStops={["#0B0114", "#1E0B36", "#4C1D95"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="hero grid md:grid-cols-2 items-center pt-32 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/xhuul.png" className="w-10 rounded-md" />
              <q>live to breathe</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Akhmad Fatkhul Arifin" disabled={false} speed={3} className='custom-class' />
            </h1>
            <BlurText
              text="Seorang Mahasiswa yang bersemangat dan berdedikasi untuk menciptakan pengalaman digital modern dan berkinerja tinggi melalui solusi inovatif hehe."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              {/* UBAH WARNA: Border dan Hover menjadi nuansa ungu */}
              <a 
                href="./assets/CV.pdf" 
                download="Fatkhul_CV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-violet-900/50 hover:bg-violet-900/20 hover:border-violet-500 transition-all duration-300"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>

              {/* UBAH WARNA: Border dan Hover menjadi nuansa ungu */}
              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-violet-900/50 hover:bg-violet-900/20 hover:border-violet-500 transition-all duration-300">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
            </div>

          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Akhmad Fatkhul.A"
              title="Mahasiswa Teknik Informatika"
              handle="fatkhul.png"
              status="Offline"
              contactText="Contact Me"
              avatarUrl="./assets/xhuull.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
        </div>

        {/* Tentang - (Sudah Ungu, tidak diubah) */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about" ref={aboutRef}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="Halo, saya Akhmad Fatkhul Arifin, Mahasiswa Teknik Informatika yang sedikit antusias mengembangkan solusi digital, khususnya di Web Development dan Software Engineering."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="false">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.85<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Experience - (Sudah Ungu, tidak diubah) */}
        <div className="mt-32" id="experience">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
            <h1 className="text-4xl font-bold mb-14 text-center text-white">Experience</h1>
          </div>

          <div className="flex flex-col gap-10 max-w-[1600px] mx-auto">
            {listExperience.map((exp) => (
              <div 
                key={exp.id} 
                data-aos="fade-up" 
                data-aos-once="false"
                className="rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-8"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <p className="text-violet-400 font-medium">
                    {exp.company} <span className="mx-2 text-zinc-600">|</span> {exp.period}
                  </p>
                </div>

                <ul className="space-y-3">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i} className="text-zinc-300 text-sm md:text-base leading-relaxed flex gap-3">
                      <span className="text-violet-500">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION SERTIFIKAT --- */}
<section className="sertifikat mt-32 py-10" id="certificates">
  {/* Menggunakan max-w-full agar kolom melebar maksimal ke samping */}
  <div className="max-w-full mx-auto px-4 md:px-10">
    
    {/* Header Section */}
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
      <h1 className="text-center text-4xl font-bold mb-2 text-white">Certificates</h1>
      <p className="text-base/loose text-center opacity-50 max-w-2xl mx-auto text-zinc-400">
        A collection of professional certifications and achievements that validate my technical expertise.
      </p>
    </div>

    {/* Box Sertifikat: Tanpa background hitam, tanpa border, dan tanpa shadow */}
    <div className="mt-14 bg-transparent border-none shadow-none">
      <div 
        style={{ height: 'auto', position: 'relative' }} 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        data-aos-delay="400" 
        data-aos-once="false" 
      >
        <ChromaGrid
          items={listSertifikat} // Menggunakan data listSertifikat dari data.js
          onItemClick={handleProjectClick} // Menggunakan handler yang sama untuk preview
          radius={600} // Radius ditingkatkan agar efek interaksi mengikuti kolom yang lebar
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  </div>
</section>
{/* --- AKHIR SECTION SERTIFIKAT --- */}

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" id="skills" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" >Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="false">My Skills Kayane</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="false"
                // UBAH WARNA: Tambah hover border violet
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:border-violet-500/50 hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="false">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >
          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="false" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="false"
          >
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="false">
              <ChatRoom />
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/fatkhularif15@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="false"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    {/* UBAH WARNA: Tambah focus border violet */}
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-700 focus:border-violet-500 outline-none transition-colors p-2 rounded-md bg-zinc-900"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    {/* UBAH WARNA: Tambah focus border violet */}
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-700 focus:border-violet-500 outline-none transition-colors p-2 rounded-md bg-zinc-900"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    {/* UBAH WARNA: Tambah focus border violet */}
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-700 focus:border-violet-500 outline-none transition-colors p-2 rounded-md bg-zinc-900"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    {/* UBAH WARNA: Border dan Hover menjadi nuansa ungu */}
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-violet-900/50 hover:bg-violet-900/20 hover:border-violet-500 transition-all duration-300"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App;
