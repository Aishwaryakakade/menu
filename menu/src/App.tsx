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
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";

import SinglePageError from "./pages/SinglepageError";
//Query imports
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
// Defining routes singleCocktailLoader
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
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: (
          <SinglePageError message="You’ve officially out-sipped our menu. Try a different mix!" />
        ),
        loader: singleCocktailLoader(queryClient),
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
        action: newsLetterAction,
        element: <NewsLetter />,
      },
    ],
  },

  { path: "**", element: <Error /> },
]);

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
