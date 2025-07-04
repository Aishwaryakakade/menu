import React from "react";
import { GiDiamonds } from "react-icons/gi";

type CocktailCardProps = {
  id?: string | number;
  name?: string;
  image?: never;
  info?: string;
  glass?: string;
  ingredient_one: string;
  ingredient_two: string;
  ingredient_three: string;
};

const CocktailCard: React.FC<CocktailCardProps> = ({
  id,
  name,
  image,
  info,
  glass,
  ingredient_one,
  ingredient_two,
  ingredient_three,
}) => {
  return (
    <article className="border-2 rounded-xl">
      <div className="m-0.5 border-l-8 rounded-lg h-52 w-auto p-2 flex flex-row  items-center justify-between">
        <div className="flex flex-col text-2xl text-[#446161] justify-center font-semibold">
          {name}
        </div>
        <GiDiamonds />
        <div className="flex flex-col text-[#446161] justify-center text-sm">
          <p>{ingredient_one}</p>
          <p>{ingredient_two}</p>
          <p>{ingredient_three}</p>
          <div className="text-lg font-bold mt-2 text-[#446161]">
            $
            {id?.toString().substring(3, 4) === "0"
              ? "9"
              : id?.toString().substring(3, 4)}
          </div>
        </div>
        <div>
          <img
            src={image}
            alt={name}
            style={{ height: "196px" }}
            className="rounded-md"
          />
        </div>
      </div>
    </article>
  );
};

export default CocktailCard;
