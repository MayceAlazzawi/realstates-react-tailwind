import React, { FC } from "react";
import "./index.css";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/searchBar";
import { Input } from "./components/Input";
import Data from "./jsonData/Cities.json";
import { Container } from "./components/section2/container";
const App: FC = () => {
  return (
    <div className="App font-body  flex justify-center  flex-col">
      <Hero />
      <Container />
    </div>
  );
};

export default App;
