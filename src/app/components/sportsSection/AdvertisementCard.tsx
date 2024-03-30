import React from "react";
import { useMyTheme } from "../context/ThemeContext";
import Image, { StaticImageData } from "next/image";
import AdImage from "../Images/Ad.jpg";
const AdvertisementCard = () => {
  const { theme } = useMyTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-[#3B3E47]";

  return (
    <div
      className={`flex flex-col justify-center items-center mt-11 ${textColor}`}>
      <div className={`h-[32rem] w-[15.9rem] ${bgColor} relative`}>
        <div
          id="part1"
          className="flex flex-col items-center justify-center mt-2">
          <div className="w-[14.5625rem] h-[11.5409375rem] relative">
            <Image
              src={AdImage}
              alt=""
              className="h-full w-full bg-slate-200"
            />
            <h2 className={`absolute top-0 right-0 bg-black text-white px-2`}>
              Ad
            </h2>

            <div className={`${textColor} my-5`}>
              <div className="text-[1.45rem] font-semibold text-center">
                <div>
                  Advertisement title <br />
                  <div className="text-[0.8rem] text-justify px-2 font-light mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit fuga possimus corporis harum exercitationem aperiam
                    maiores perspiciatis dolores, officiis aliquid perferendis
                    voluptatem distinctio magnam rem ipsam mollitia aut eligendi
                    assumenda! voluptatem distinctio magnam rem ipsam mollitia
                    aut eligendi assumenda!{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
