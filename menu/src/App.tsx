// import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  About,
  Landing,
  Cocktail,
  Error,
  NewsLetter,
  HomeLayout,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import SinglePageError from "./pages/SinglepageError";

// Defining routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    /**
     * If not marked index, it will be ruted to "/" path ,
     * When someone visits exactly /, render <HomeLayout />, and inside it, render <Landing />> by default.
     */
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: (
          <SinglePageError message="If you’re thirsty and you know it… refresh the page!" />
        ),
        loader: landingLoader,
      },
      {
        path: "cocktail",
        errorElement: (
          <SinglePageError message="You’ve officially out-sipped our menu. Try a different mix!" />
        ),
        element: <Cocktail />,
      },
      {
        path: "about",
        errorElement: (
          <SinglePageError message="We’re just here to stir up trouble — and your drink." />
        ),
        element: <About />,
      },
      {
        path: "newsletter",
        errorElement: (
          <SinglePageError message="Our cocktails ghosted us… try shaking things up again" />
        ),
        element: <NewsLetter />,
      },
    ],
  },

  { path: "**", element: <Error /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
