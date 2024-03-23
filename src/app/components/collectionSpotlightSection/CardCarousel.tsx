import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CollectionSpotlightCard from "./CollectionSpotlightCard";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
import PlayerData2 from "./PlayersData2";
import { useMyTheme } from "../context/ThemeContext";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);
  const { theme } = useMyTheme();
  
  const arrowColor = theme === "light" ? "text-black" : "text-white";
  const disabledButtonColor =
    theme === "light" ? "text-gray-400" : "text-gray-600";

  useEffect(() => {
    const handleResize = () => {
      setVisibleCardsCount(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const cardsToMove = window.innerWidth < 768 ? 1 : 3;
    if (currentIndex < PlayerData2.length - visibleCardsCount) {
      setCurrentIndex((prevIndex) => prevIndex + cardsToMove);
    }
  };

  const prevSlide = () => {
    const cardsToMove = window.innerWidth < 768 ? 1 : 3;
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - cardsToMove);
    }
  };

  const visibleCards = PlayerData2.slice(
    currentIndex,
    currentIndex + visibleCardsCount
  );

  return (
    <div>
      <div className="carousel flex justify-center items-center gap-10 mt-16">
        <motion.button
          onClick={prevSlide}
          className={`text-black ${arrowColor} ${
            currentIndex === 0 ? disabledButtonColor : "text-black"
          }`}
          disabled={currentIndex === 0}
          whileTap={{ scale: 0.9 }}
          type="button"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}>
          <ArrowBackIosNew />
        </motion.button>
        {visibleCards.map((player, index) => (
          <motion.div
            key={player.Id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <CollectionSpotlightCard player={player} />
          </motion.div>
        ))}
        <motion.button
          onClick={nextSlide}
          className={`text-black ${arrowColor} ${
            currentIndex >= PlayerData2.length - visibleCardsCount
              ? disabledButtonColor
              : ""
          }`}
          disabled={currentIndex >= PlayerData2.length - visibleCardsCount}
          whileTap={{ scale: 0.9 }}
          type="button"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}>
          <ArrowForwardIos />
        </motion.button>
      </div>
    </div>
  );
};

export default CardCarousel;
