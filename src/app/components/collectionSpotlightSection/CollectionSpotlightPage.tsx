
import { useMyTheme } from "../context/ThemeContext";
import CardCarousel from "./CardCarousel";

const CollectionSpotlightPage = () => {
  const { theme } = useMyTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgColor = theme === "light" ? "bg-[#F7F7F8]" : "bg-[#18282A]"; 

  return (
    <>
      <div className={`h-[150vh]  md:mx-20  ${textColor}`}>
        <div className="flex flex-col justify-center items-center mt-11">
          <div className={`w-full  md:h-[60.375rem] ${bgColor}`}>
            <h1 className="text-center text-2xl md:text-5xl font-bold mt-20">
              Collection Spotlight
            </h1>
            <div className="text-center text-sm md:text-base mt-4">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable <br />
              experience. Grab yours today!
            </div>
            <div>
              <CardCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionSpotlightPage;
