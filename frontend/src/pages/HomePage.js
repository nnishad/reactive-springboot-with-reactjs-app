import React from 'react';
import {Link} from "react-router-dom";

/**
 * Application home page component
 * @returns {JSX.Element}
 */
const HomePage = () => {

    return (
        <>
            <h1>Hello world!</h1>
            <p>
                I am a HomePage!
            </p>
            <Link to={"/search/1"}>Search</Link>
        </>
    );
};

export default HomePage;