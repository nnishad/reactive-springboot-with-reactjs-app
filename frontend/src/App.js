import React from 'react';
import {BrowserRouter as Router, createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import Search from "./pages/Search";

/**
 * Turns URL path into router basename by removing everything after the last slash
 *
 * @HindleyMilner getBasename :: string -> string
 *
 * @pure
 * @param {string} path URL path, probably window.location.pathname
 * @returns {string} final basename
 *
 * @example
 * getBaseName('/some/structure/page'); // => '/some/structure'
 */
// const getBasename = path => substr(lastIndexOf('/')(path))(0)(path);

/**
 * Base Template component holding the basic web application
 * @returns {JSX.Element}
 */

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <Page404 />,
    },
    {
        path: "search/:searchId",
        element: <Search />,
    },
]);
const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;