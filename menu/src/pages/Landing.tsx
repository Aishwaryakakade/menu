/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom"; // Hook to access data returned by the route's loader
import CocktailList from "../components/cocktail/cocktailList";
import SearchForm from "../components/cocktail/searchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";
type LoaderData = {
  // drinks: any[];
  searchTerm: string;
};

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

// LOADER FUNCTION
// This function will run before the component renders
// It fetches data for the component from the CocktailDB API
// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: any) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "martini";

    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    return {
      searchTerm,
    };
  };

const Landing: React.FC = () => {
  // Getting the data returned from the loader
  const { searchTerm } = useLoaderData() as LoaderData;
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  const [cocktailListProps, setCocktailListProps] = useState({
    drinks,
    searchTerm,
  });

  return (
    <>
      <SearchForm searchTerm={searchTerm} />

      <CocktailList {...cocktailListProps} />
    </>
  );
};

export default Landing;
