import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const Store = (props) => {

    // For each item, we need to display a title, the image, a description, and a price

    const { storeItems } = props;

    // <h3>Things to do here</h3>
    // <ul>
    //     <li>Make the store items clickable to load the Item component dynamically</li>
    //     <li>I don't think I want them to be able to add the item to the cart from here - Although easy enought to implement</li>
    //     <li>Maybe include a button to do so</li>
    // </ul>

    return (
        <div>
            <h1 className='section-title'>Store</h1>


            <div className="store-item-wrapper">
                {storeItems.map(item => {
                    return (
                        <div className='store-item-container' key={item.itemID}>
                            <Link to={`/store/${item.itemID}`}>
                                <img src={item.url} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>${item.price}</p>
                            </Link>

                        </div>
                    )
                })}

                <div className='spacer' />
            </div>




            {/* {storeItems.map( item => {
                return <Item item={item} />
            })} */}
        </div>
    )


}


export default Store;