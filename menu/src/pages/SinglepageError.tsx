import React from "react";
import { Link } from "react-router-dom";
type SinglePageError = {
  message: string;
};

const SinglePageError: React.FC<SinglePageError> = ({ message }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <section className="text-center text-xl font-semibold">
        {message}
        <br />
        <Link to="/">Back home</Link>
      </section>
    </div>
  );
};

export default SinglePageError;
