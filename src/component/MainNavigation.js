import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className="header">
            <nav>
                <ul className="list">
                    <li className="removeBullets">
                        <NavLink to="/"
                            className={({isActive}) => isActive ? "active": undefined} end>
                            Home
                        </NavLink>
                    </li>
                    <li className="removeBullets">
                        <NavLink to="/products"
                                 className={({isActive}) => isActive ? "active": undefined}>
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;