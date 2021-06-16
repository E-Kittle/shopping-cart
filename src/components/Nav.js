import React from 'react';
import '../style/App.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {


    return (
        <nav>
            <ul className='nav-list'>
                <Link to="/" exact>
                    <li>Home</li>
                </Link>
                <Link to="/store">
                    <li>Store</li>
                </Link>

                {/* Add an image for cart later */}
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )


}


export default Nav;