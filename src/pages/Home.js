import React from 'react';
import {Link} from "react-router-dom";
import classes from "../index.css";

const Home = () => {
    return (
        <div className="content">
            <h3>HomePage</h3>
            <p>Go to
                <Link to="/products"> the list of Products</Link>
            </p>
        </div>
    );
};

export default Home;