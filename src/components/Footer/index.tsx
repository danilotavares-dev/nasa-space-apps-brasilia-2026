import { Email } from '../../components/Email/index';

export const Footer = () => {
  return (
    <footer className="z-100 flex justify-center w-full h-60 bottom-0 bg-[#07173F] border-t-2 border-[#8E1100]">
      <div className="flex justify-center gap-10 w-full max-w-7xl p-5">
        <div className="flex flex-col w-full justify-center items-center gap-2">
          <h1 className="font-sans font-normal text-white">
            NASA SPACE APPS CHALLENGE Brasília • 2026
          </h1>
          <h1 className="font-sans font-normal text-white">
            © 2026 NASA Space Apps Challenge Brasília
          </h1>
        </div>
        <a
          href="./"
          className="flex flex-col w-full justify-center items-center gap-5"
        >
          <h1 className="text-white font-overpass font-bold">Contato</h1>
          <div className="flex justify-center items-center gap-2 text-white">
            {Email}
            <h1 className="font-sans font-normal text-white">E-mail</h1>
          </div>
        </a>
      </div>
    </footer>
  );
};
