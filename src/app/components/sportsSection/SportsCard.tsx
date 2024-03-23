
import { useMyTheme } from "../context/ThemeContext";

type SportsCardProps = {
  Image: string;
  TeamName: string;
  TotalEvents: number;
  Sport: string;
};

const SportsCard: React.FC<SportsCardProps> = ({
  Image,
  TeamName,
  TotalEvents,
  Sport,
}) => {
  const { theme } = useMyTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-[#3B3E47]";
  const boxShadow = theme === "light" ? "shadow-xl" : "";

  return (
    <div
      className={`flex flex-col justify-center items-center mt-11 ${textColor}`}>
      <div className={`h-[32rem] w-[15.9rem] ${bgColor} ${boxShadow}`}>
        <div
          id="part1"
          className="flex flex-col items-center justify-center mt-3">
          <div className="w-[14.5625rem] h-[23.081875rem] bg-slate-200">
            <img src={Image} alt="" className="h-full w-full" />
          </div>

          <div className="flex flex-col justify-start items-start">
            <h2 className={`text-lg my-2 font-medium ${textColor} text-left`}>
              {TeamName}
            </h2>
          </div>

          <div
            id="part3"
            className={`w-[14.5625rem] ${
              theme === "light" ? "bg-[#F7F7F8]" : "bg-[#292B32]"
            }`}>
            <div className="h-[3.4rem] w-full px-2 flex gap-7 my-2">
              <div id="sub1" className="flex flex-col">
                <div className={`${textColor} text-sm`}>Total Events</div>
                <div className={`text-lg ${textColor}`}>{TotalEvents}</div>
              </div>
              <div id="sub2" className="flex flex-col">
                <div className={`${textColor} text-sm`}>Sport</div>
                <div className={`text-lg ${textColor}`}>{Sport}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
