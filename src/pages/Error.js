import React from 'react';
import MainNavigation from "../component/MainNavigation";

const Error = () => {
    return (
        <>
            <MainNavigation/>
            <main>
                <h1>An error has occurred</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
};

export default Error;