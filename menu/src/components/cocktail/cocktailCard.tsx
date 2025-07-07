import React from "react";
import { GiDiamonds } from "react-icons/gi";
import { Link } from "react-router-dom";

type CocktailCardProps = {
  id?: string | number;
  name?: string;
  image?: never;
  info?: string;
  glass?: string;
};

const CocktailCard: React.FC<CocktailCardProps> = ({
  id,
  name,
  image,
  info,
  glass,
}) => {
  return (
    <article className="border-2 rounded-xl">
      <div className="m-0.5 border-l-8 rounded-lg h-52 w-auto p-2 flex flex-row  items-center justify-between">
        <div className="flex flex-col text-2xl text-[#446161] justify-center font-semibold w-[60px] ">
          {name}
        </div>
        <GiDiamonds />
        <div className="flex flex-col text-[#446161] justify-center text-sm w-[180px]">
          <p>
            A {info} drink served in {glass}
          </p>
          <p></p>

          <Link to={`/cocktail/${id}`}>Explore</Link>
        </div>
        <div>
          <img
            src={image}
            alt={name}
            style={{ height: "196px", width: "170px" }}
            className="rounded-md"
          />
        </div>
      </div>
    </article>
  );
};

export default CocktailCard;
