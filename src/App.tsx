import React, { FC } from "react";
import "./index.css";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/searchBar";
import { Input } from "./components/Input";
import Data from "./jsonData/Cities.json";
import { Container } from "./components/section2/Container";
import Section3 from "./components/Section3";
const App: FC = () => {
  return (
    <div className="App font-body  flex justify-center items-center  flex-col bg-[#fafbfc]">
      <Hero />
      <Container />
      <Section3 />
    </div>
  );
};

export default App;
