import React from 'react';
import '../style/generic.css';
import '../style/cart.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cart = (props) => {

    // Set the state
    const [total, setTotal] = useState(0);

    // Destructure props
    const { cart, removeItemFromCart, editCart } = props;

    // This function is called by the useEffect hook to calculate the current total of the cart
    const calcTotal = () => {
        let tempTotal = cart.reduce((acc, item) => {
            return acc += (item.qty * item.price);
        }, 0)

        setTotal(tempTotal);
    }

    // This effect is called whenever the cart is updated. It will calculate the new total of the cart
    useEffect(() => {
        calcTotal();
    }, [cart]);

    return (
        <div>
            <h1 className='section-title'>Shopping cart</h1>
            <div className='shopping-cart-container'>
                {(cart.length === 0) ? <h2>Cart is Empty</h2> : <div>
                {cart.map(item => {
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
                                    <button className='qtyButton' id={item.itemID} onClick={(e) => editCart(e, -1)}>&lt;</button>
                                    <p className='item-quantity'>{item.qty}</p>
                                    <button className='qtyButton' id={item.itemID} onClick={(e) => editCart(e, 1)}>&gt;</button>
                                </div>
                                <button id={item.itemID} onClick={(e) => removeItemFromCart(e)}>Remove item</button>
                            </div>
                        </div>
                    )
                })} </div>}



                <div className='cart-total-section'>
                    <h3>Total: ${total}</h3>

                    <div className='total-buttons'>
                        <button onClick={() => alert("You're a bad person to wish nightmares upon your enemies")}>Checkout</button>
                        <Link to={'/store'} ><button>Back to shop</button></Link>
                    </div>

                </div>

            </div>
            <div className='spacer' />
        </div>
    )


}


export default Cart;