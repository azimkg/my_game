import React from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar";

const MainPage = () => {
  return (
    <div className="container">
      <Navbar />
      <Game />
    </div>
  );
};

export default MainPage;
