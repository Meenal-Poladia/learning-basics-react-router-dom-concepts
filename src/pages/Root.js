import React from 'react';
import {Outlet} from "react-router-dom";
import MainNavigation from "../component/MainNavigation";
import "../index.css";

const Root = () => {
    return (
        <>
            <MainNavigation/>
            <main className="content">
                <Outlet/>
            </main>
        </>
    );
};

export default Root;