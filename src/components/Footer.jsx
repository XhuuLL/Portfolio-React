import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="mt-32 w-full border-t border-zinc-800 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright & Info */}
        <div className="text-zinc-500 text-sm font-medium order-2 md:order-1 text-center md:text-left">
          <span>© 2026 / </span>
          <span className="text-zinc-200">Akhmad Fatkhul Arifin</span>
          <span className="hidden md:inline"> Portfolio Website React & Firebase</span>
        </div>

        {/* Ikon Sosial Media (Minimalis) */}
        <div className="flex items-center gap-5 order-1 md:order-2 text-zinc-400">
          <a href="https://github.com/XhuuLL" className="hover:text-white transition-colors">
            <i className="ri-github-line ri-xl"></i>
          </a>
          <a href="https://www.instagram.com/fatkhul.png" className="hover:text-white transition-colors">
            <i className="ri-instagram-line ri-xl"></i>
          </a>
          <a
              href="https://www.linkedin.com/in/akhmad-fatkhul-arifin-632a383a6 " 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-line ri-xl"></i>
          </a>

          <a href="mailto:fatkhularif15@gmail.com" className="hover:text-white transition-colors">
            <i className="ri-mail-line ri-xl"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
