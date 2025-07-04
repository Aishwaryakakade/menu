import React from "react";
import CocktailCard from "./cocktailCard";
type Drink = {
  idDrink: string | number;
  strDrink: string;
  strDrinkThumb: never;
  strAlcoholic: string;
  strGlass: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
};
type CocktailListProps = {
  drinks: Drink[];
  searchTerm: string;
};

const CocktailList: React.FC<CocktailListProps> = ({ drinks, searchTerm }) => {
  if (!drinks) {
    return (
      <h4 className="text-center">
        Looks like the bartender's on break. No drinks here — yet!
      </h4>
    );
  }

  const formattedDrinks = drinks.map((drink) => {
    console.log(drink);
    const {
      idDrink,
      strDrink,
      strDrinkThumb,
      strAlcoholic,
      strGlass,
      strIngredient1,
      strIngredient2,
      strIngredient3,
    } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
      ingredient_one: strIngredient1,
      ingredient_two: strIngredient2,
      ingredient_three: strIngredient3,
    };
  });

  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-4 gap-4">
        {formattedDrinks.map((item) => {
          return <CocktailCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
