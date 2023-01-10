import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './AvailableFoods.css';

const AvailableFoods = () => {
    return (
        <div className='text-center pt-5 fw-bold'>
            <Link to="/breakfast" className='text-dark p-3 text-decoration-none'>
                Breakfast
            </Link><Link to="/lunch" className='text-dark p-3 text-decoration-none'>
                Lunch
            </Link><Link to="/dinner" className='text-dark p-3 text-decoration-none'>
                Dinner
            </Link>
            <Outlet></Outlet>
        </div>
    );
};

export default AvailableFoods;