import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

import React from 'react'

const Navbar = () => {
    console.log(
        useSelector((store) => {console.log(store)}))
    return (
        <nav>
            <div className='nav-center '>
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className='total-amount '>0</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;