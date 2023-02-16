import React, { FC } from "react";
import "./index.css";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/searchBar";
const App: FC = () => {
  return (
    <div className="App font-body  flex justify-center  ">
      <Hero />
      <SearchBar />
    </div>
  );
};

export default App;
