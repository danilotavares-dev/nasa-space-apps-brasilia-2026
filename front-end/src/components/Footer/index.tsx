import { Email } from '../../components/Email/index';
import { Instagram } from '../../components/Instagram/index';

export const Footer = () => {
  const contactLinks = [
    {
      href: 'mailto:nasaspaceappsbsb@gmail.com',
      icon: Email,
      label: 'nasaspaceappsbsb@gmail.com',
      isExternal: false,
    },
    {
      href: 'https://www.instagram.com/nasaspaceappsbsb',
      icon: Instagram,
      label: 'nasaspaceappsbsb',
      isExternal: true,
    },
  ];

  return (
    <footer className="relative z-50 w-full bg-[#07173F] border-t-2 border-[#8E1100] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p className="font-sans font-semibold text-white tracking-wide text-sm md:text-base">
            NASA SPACE APPS CHALLENGE Brasília • 2026
          </p>
          <p className="font-sans text-xs text-gray-400">
            © 2026 NASA Space Apps Challenge Brasília. All rights reserved.
          </p>
        </div>

        <address className="flex flex-col items-center md:items-start gap-2 not-italic">
          <div className="flex items-center gap-2">
            <span className="font-overpass font-bold text-white text-sm uppercase tracking-wider">
              Contato
            </span>
          </div>

          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm group"
            >
              <span className="p-1.5 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                {link.icon}
              </span>
              <span className="font-sans font-normal">{link.label}</span>
            </a>
          ))}
        </address>
      </div>
    </footer>
  );
};
