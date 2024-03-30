import { useMyTheme } from "../context/ThemeContext";
import Image, { StaticImageData } from "next/image";

interface Player {
  Image: StaticImageData;

  TeamName: string;
  Timings: {
    Date: string;
    Day: string;
    Time: string;
  };
  Venue: string;
  ButtonContent: string;
}

const CollectionSpotlightCard: React.FC<{ player: Player }> = ({ player }) => {
  const { theme } = useMyTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgColor = theme === "light" ? "bg-[#F7F7F8]" : "bg-[#3B3E47]";

  return (
    <div className={` p-4 shadow-md h-[36.5rem] mb-10 ${bgColor}`}>
      <Image
        src={player.Image}
        alt=""
        className="w-full h-[25.125rem] mb-4 "
      />

      <p className={`text-lg mb-2 text-center ${textColor} font-semibold`}>
        {player.TeamName}
      </p>
      <p className={`text-sm mb-2 text-center ${textColor}`}>
        {player.Timings.Date} | {player.Timings.Day} | {player.Timings.Time}
      </p>
      <p className={`text-sm mb-2 text-center ${textColor}`}>{player.Venue}</p>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-[#000000] hover:bg-[black] text-white text-[1rem] py-[0.5rem] px-6 rounded mb-10 ">
          {player.ButtonContent}
        </button>
      </div>
    </div>
  );
};

export default CollectionSpotlightCard;
