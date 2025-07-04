import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="text-center text-xl font-semibold ">
        You've had one too many... this page doesn't exist!
        <br />
        <Link to="/">Back home</Link>
      </section>
    </div>
  );
};

export default Error;
