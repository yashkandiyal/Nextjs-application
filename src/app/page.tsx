"use client";
import { useEffect } from "react";
import SportsPage from "./components/sportsSection/SportsPage";
import CollectionSpotlightPage from "./components/collectionSpotlightSection/CollectionSpotlightPage";
import { useMyTheme } from "./components/context/ThemeContext";
export default function Home() {
  const { theme } = useMyTheme();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);
  return (
    <>
      <div>
        <SportsPage />
        <CollectionSpotlightPage />
      </div>
    </>
  );
}
