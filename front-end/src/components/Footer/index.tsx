import { Email } from '../../components/Email/index';

export const Footer = () => {
  return (
    <footer className="relative z-50 w-full bg-[#07173F] border-t-2 border-[#8E1100] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p className="font-sans font-semibold text-white tracking-wide text-sm md:text-base">
            NASA SPACE APPS CHALLENGE Brasília • 2026
          </p>
          <p className="font-sans text-xs text-gray-400">
            © 2026 NASA Space Apps Challenge Brasília. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="font-overpass font-bold text-white text-sm uppercase tracking-wider">
              Contato
            </span>
            <span className="text-[12px] text-gray-400 font-sans">
              (Responsável)
            </span>
          </div>
          <a
            href="mailto:danilotavares070@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm group"
          >
            <span className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              {Email}
            </span>
            <span className="font-sans font-normal">
              danilotavares070@gmail.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
