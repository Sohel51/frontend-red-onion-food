import React from 'react'
import './Banner.css';

const Banner = () => {
    return (
        <div className = 'background-img' >
            <div className="text-center">
                <h1 className='pb-1'>Best Food Waiting For Your Belly..!</h1>
                <input type="text" placeholder="Search food items" width="50px" className='input-field rounded-pill py-2 border-0' /> <button className='bg-danger rounded-pill text-white px-4 py-2 border-0'>Search</button>
            </div>
        </div>
  )
}

export default Banner