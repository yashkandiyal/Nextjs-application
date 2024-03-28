"use client";
import React from "react";
import PlayerData from "./PlayersData";
import SportsCard from "./SportsCard";
import AdvertisementCard from "./AdvertisementCard";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useMyTheme } from "../context/ThemeContext";

const SportsPage = () => {
  const { theme, toggleTheme } = useMyTheme();

  return (
    <>
      <div className="flex justify-between mx-16 md:mx-20 items-center mt-8">
        <h1
          className={`text-2xl font-bold  border-b-[3px] border-blue-500 ${
            theme === "light" ? "text-black" : "text-white"
          }`}>
          Sports
        </h1>
        {theme === "light" ? (
          <DarkModeIcon
            fontSize="large"
            onClick={toggleTheme}
            className="cursor-pointer"
          />
        ) : (
          <LightModeIcon
            fontSize="large"
            onClick={toggleTheme}
            className="text-white cursor-pointer"
          />
        )}
      </div>
      <div className="flex gap-5 items-center justify-center flex-wrap">
        <div className="flex gap-5 items-center justify-center flex-wrap">
          {PlayerData.map((player) => (
            <SportsCard
              key={player.Id}
              Images={player.Image}
              TeamName={player.TeamName}
              TotalEvents={player.TotalEvents}
              Sport={player.Sport}
            />
          ))}
        </div>
        <div>
          <AdvertisementCard />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button">
          See more
        </button>
      </div>
    </>
  );
};

export default SportsPage;
