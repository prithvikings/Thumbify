const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} Thumbnail AI. All rights reserved.
          </span>
        </div>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors text-xs"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors text-xs"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors text-xs"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
