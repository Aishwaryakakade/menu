# React + TypeScript + Vite

```Steps as follows

1: Create application using vite : npm create vite@latest menu -- --template react-ts
2: Install dependency: tanstack-query, tanstack-query-devtools, Axios, and react-router-dom
3: In App.tsx:  import createBrowserRouter and RouterProvider from 'react-router-dom'
    * createBrowserRouter is a object with two propert path and elemet
      path will define the page url
      element will define Component to render

    * RoubteProvider will render active route path compoent in DOM

```

#### 4: Setup Pages

- pages are components
- create src/pages
- About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js
- export from index.js

pages/index.js

```js
export { default as Landing } from "./Landing";
export { default as About } from "./About";
export { default as Cocktail } from "./Cocktail";
export { default as Newsletter } from "./Newsletter";
export { default as HomeLayout } from "./HomeLayout";
export { default as Error } from "./Error";
```

App.jsx

```js
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";
```

#### 5: Link Component

```js
import { Link } from "react-router-dom";
```

HomeLayout.jsx

<Link to='/about'>About</Link> : Navigates to About page.

#### 6: Nesting of pages: Though <Link> component works fine, we need to
