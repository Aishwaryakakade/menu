/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom"; // Hook to access data returned by the route's loader
import CocktailList from "../components/cocktail/cocktailList";

type LoaderData = {
  drinks: any[];
  searchTerm: string;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// LOADER FUNCTION
// This function will run before the component renders
// It fetches data for the component from the CocktailDB API
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const searchTerm = "martini";
  const response = await axios.get(`${url}${searchTerm}`);
  // Returning the data and search term to be accessed inside the component
  return {
    drinks: response.data.drinks,
    searchTerm,
  };
};

const Landing: React.FC = () => {
  // Getting the data returned from the loader
  const { drinks, searchTerm } = useLoaderData() as LoaderData;

  const [cocktailListProps, setCocktailListProps] = useState({
    drinks,
    searchTerm,
  });

  return (
    <>
      <CocktailList {...cocktailListProps} />
    </>
  );
};

export default Landing;
