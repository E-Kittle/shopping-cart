import React from 'react';
import Item from './Item';

const Store = () => {

    // For each item, we need to display a title, the image, a description, and a price

    const storeItems = [{name: 'Anglerfish', url:'/images/anglerfish.webp', description: 'This fish uses light to lure you out of the dark. The last thing you will every see will be its multitude of teeth gaping wide to swallow you whole. 10/10 on the terror scale.', price:550.00}]
    return (
        <div>
            {storeItems.map( item => {
                return <Item item={item} />
            })}
        </div>
    )


}


export default Store;