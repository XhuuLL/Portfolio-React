import { useState, useEffect } from "react";
import { Home, User, Briefcase, Book, Image as ImageIcon, Sun, Contact, BriefcaseBusiness } from "lucide-react";

const Navbar = ({ hidden = false }) => {
  if (hidden) return null;

  const [active, setActive] = useState(false);
  const [time, setTime] = useState(new Date());

  // Logic untuk Jam Digital
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Logic Scroll untuk memunculkan/menghilangkan Navbar
  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      {/* Container Utama (Kapsul) */}
      <nav 
        className={`flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full transition-all duration-500 shadow-2xl
        ${active ? "opacity-100 translate-y-0" : "opacity-90 -translate-y-2"}`}
      >
        
        {/* Tombol Home (Ikon Bulat) */}
        <a href="#home" className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors">
          <Home size={18} className="text-zinc-400" />
        </a>

        <div className="h-4 w-[1px] bg-zinc-700 mx-1" /> {/* Separator */}

        {/* Menu Navigasi */}
        <ul className="flex items-center gap-1">
          <NavItem href="#about" icon={<User size={16} />} label="About" />
          <NavItem href="#experience" icon={<BriefcaseBusiness size={16} />} label="Experience" />
          <NavItem href="#certificates" icon={<Book size={16} />} label="Certificate" />
          <NavItem href="#contact" icon={<Contact size={16} />} label="Contact" />
          <NavItem href="#skills" icon={<Book size={16} />} label="Skills" />
          <NavItem href="#project" icon={<Briefcase size={16} />} label="Project" />
        </ul>
        {/* Jam Digital (Sesuai Gambar) */}
        <div className="hidden md:block ml-4 pr-2 border-l border-zinc-700 pl-4">
          <span className="text-sm font-mono text-zinc-400">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
          </span>
        </div>
      </nav>
    </div>
  );
};

// Komponen Kecil untuk Item Navigasi agar kode lebih bersih
const NavItem = ({ href, icon, label }) => (
  <li>
    <a 
      href={href} 
      className="flex items-center gap-2 px-3 py-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all text-sm font-medium"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  </li>
);

export default Navbar;