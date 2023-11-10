import React from "react";
import { useAppContext } from "../context/appContext";
import SearchBar from "../components/SearchBar";
import BreweryCard from "../components/BreweryCard";

const Breweries = () => {
  const { user, breweries } = useAppContext();
  return (
    <div>
      <div className='text-4xl font-bold text-center my-4'>
        Breweries
      </div>
      <SearchBar />
      <div className='text-2xl font-bold text-center my-4'>
      {(breweries?.length === 0 || breweries===undefined) && "No breweries to show"}
      </div>
      <div className="flex flex-col justify-center mx-auto items-center">
        {breweries?.map((brewery, index) => (
          <div key={index}>
            <BreweryCard brewery={brewery} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breweries;
