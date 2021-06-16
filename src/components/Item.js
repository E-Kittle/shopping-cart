import React from 'react';
import '../style/Store.css'

const Item = (props) => {
    const { item } = props;

    return (
        <div className='item-page'>
            <img src={item.url} alt='failed'></img>
            <div className='item-data'>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            <div className='item-cta'>
                <p>Price: ${item.price}</p>
                <form>
                    <div className='purchase-qty-wrapper'>
                        <button id='increment'>&lt;</button>
                        <p className='item-quantity'>0</p>
                        <button id='decrement'>&gt;</button>
                    </div>

                    <button type='submit' className='purchase-button'>Add to cart</button>
                </form>
            </div>
            </div>
        </div>
    )


}


export default Item;