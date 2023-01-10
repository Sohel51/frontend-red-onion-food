import React from 'react'
import AvailableFoods from '../AvailableFoods/AvailableFoods';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AvailableFoods></AvailableFoods>
        </>
    );
};

export default Home;