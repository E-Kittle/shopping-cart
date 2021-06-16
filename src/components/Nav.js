import React from 'react';
import '../style/App.css'

const Nav = (props) => {


    return (
        <nav>
            <ul className='nav-list'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Store</a></li>
                {/* Add an image for cart later */}
                <li><a href='#'>Cart</a></li>
            </ul>
        </nav>
    )


}


export default Nav;