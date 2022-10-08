import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Page404 from "../pages/Page404";

/**
 * Routes component containing routes for the whole application
 * @returns {JSX.Element}
 */
const AppRoutes = () => (
    <Routes>
        <Route path='/' component={HomePage}/>
        <Route exact path='/search' component={Search}/>

        <Route component={Page404}/>
    </Routes>
);

export default AppRoutes;