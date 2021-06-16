import React from 'react';
import '../style/generic.css';
import '../style/cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const sampleCart = [{ name: 'Anglerfish', url: '/images/anglerfish.webp', price: 550.00, itemID: 'anglerfish', qty: 3 }, { name: 'Vampire Squid', url: '/images/vampire-squid.jpg', price: 750.00, itemID: 'vampire-squid', qty: 2 }, { name: 'Anglerfish', url: '/images/anglerfish.webp', price: 550.00, itemID: 'anglerfish', qty: 3 }, { name: 'Vampire Squid', url: '/images/vampire-squid.jpg', price: 750.00, itemID: 'vampire-squid', qty: 2 }]

    // In here add a way for the user to increment/decrement the quantity of the items
    // Also add a way to delete the item from the cart
    // Find a way to display the total of the cart

    return (
        <div>
            <h1 className='section-title'>Shopping cart</h1>
            <div className='shopping-cart-container'>
                {sampleCart.map(item => {
                    return (
                        <div className='cart-item-wrapper'>
                            <Link to={`/store/${item.itemID}`}>
                            <div className='cart-img-wrapper'>
                                <img src={item.url} alt={item.name} />
                            </div>
                            </Link>
                            <div className='cart-item-text-wrapper'>
                                <h3>{item.name}</h3>
                                <p className='price-styling'>${item.price} each</p>
                                <div className='purchase-qty-wrapper'>
                                    <button className='increment qtyButton'>&lt;</button>
                                    <p className='item-quantity'>{item.qty}</p>
                                    <button className='decrement qtyButton'>&gt;</button>
                                </div>
                                <button>Remove item</button>
                            </div>
                        </div>
                    )
                })}



                <div className='cart-total-section'>
                    <h3>Total: $2000</h3>

                    <div className='total-buttons'>
                        <button>Checkout</button>
                        <button>Back to shop</button>
                    </div>

                </div>

            </div>
            <div className='spacer' />
        </div>
    )


}


export default Cart;