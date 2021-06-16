import React from 'react';
import '../style/generic.css'
import '../style/Store.css';



const Item = (props) => {
    // Destructures storeItems
    const { storeItems } = props;

    // Filters through storeItems to find which item the user had selected from the Store component
    let choice = storeItems.filter(item => item.itemID === props.match.params.id);

    // Destructures the returned array (choice)
    let [itemInfo] = choice;

    return (
        <div>

            <h1 className='section-title'>Item Page</h1>
            <div className='item-page'>
                <img src={itemInfo.url} alt='failed'></img>
                <div className='item-data'>
                    <h1>{itemInfo.name}</h1>
                    <p>{itemInfo.description}</p>
                    <div className='item-cta'>
                        <p>Price: ${itemInfo.price}</p>
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
        </div>
    )


}


export default Item;