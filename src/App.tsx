import React, { FC } from "react";
import "./index.css";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/searchBar";
import { Input } from "./components/Input";
import Data from "./jsonData/Cities.json";
import { Card } from "./components/section2/Card";
const App: FC = () => {
  return (
    <div className="App font-body  flex justify-center  flex-col">
      <Hero />
      <Card />
    </div>
  );
};

export default App;
