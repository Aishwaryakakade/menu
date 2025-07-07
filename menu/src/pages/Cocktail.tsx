import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery, QueryClient } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id: string | number) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: any) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail: React.FC = () => {
  const { id } = useParams();
  console.log(id, "insisde component");
  const { data } = useQuery(singleCocktailQuery(id as any));
  console.log(data, ":cocktailData");
  const formatedCocktailData = data?.drinks.map((data: any) => {
    const {
      idDrink,
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strGlass,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strInstructions,
    } = data;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
      ingredient_one: strIngredient1,
      ingredient_two: strIngredient2,
      ingredient_three: strIngredient3,
      str_instructions: strInstructions,
    };
  });
  return (
    <section className="flex flex-row  items-center justify-center   ">
      {formatedCocktailData.map((cocktail: any) => {
        return (
          <div
            key={cocktail.id}
            className="border-2 rounded-xl w-3xl h-[80vh] flex flex-col items-center  p-5"
          >
            <div className="w-2xl flex flex-col items-center justify-center ">
              <img
                src={cocktail.image}
                alt={cocktail.name}
                style={{
                  height: "350px",
                  width: "300px",
                }}
                className="rounded-md"
              />
              <div className="flex flex-col items-center justify-center  m-2.5">
                <div className=" text-4xl text-[#446161] font-semibold ">
                  {cocktail.name} : $
                  {cocktail.id?.toString().substring(3, 4) === "0"
                    ? "9"
                    : cocktail.id?.toString().substring(3, 4)}
                </div>
                <div className="border-2 rounded-xl w-46 m-1" />

                <div className="flex flex-row text-lg text-[#446161] gap-10  m-3">
                  <p>{cocktail.ingredient_one} </p>
                  <p>{cocktail.ingredient_two} </p>
                  <p>{cocktail.ingredient_three} </p>
                </div>
                <div className="border-2 rounded-xl w-46 " />
                <div className="w-3xs  m-3 text-center">{cocktail.info}</div>
                <div className="border-2 rounded-xl w-46 " />
                <div className="w-3xs  m-3  text-center">
                  {cocktail.str_instructions}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cocktail;
