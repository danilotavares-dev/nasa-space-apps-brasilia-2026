import logo from '../../assets/SpaceAppsLogoColorAndWhite.png';

export const Header = () => {
  return (
    <header className="z-100 flex justify-center items-center w-full h-30 bg-[#07173F] border-b-2 border-[#eafe07]">
      <img
        src={logo}
        alt="Logo NASA Space Apps Challenge Branca"
        className="h-20"
      />
    </header>
  );
};
