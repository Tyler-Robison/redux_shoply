import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import './Cart.css'
import { useNavigate } from "react-router-dom"

const Cart = ({ displayCost, addItemToCart, removeItemFromCart }) => {

    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()
    const getDetails = (id) => navigate(`/products/${id}`)
    return (
        <div className="Cart">
            <h1>Your Cart</h1>
            <h2>Total Cost: {displayCost()}</h2>

            {cart.map(item => {
                const { name, price, description, quantity, id } = item;
                return <div className="item-div" key={id}>
                    <p><b>{name}</b></p>
                    <p><b>${price}</b></p>
                    <p>{description}</p>
                    <p><b>Quantiy:</b> {quantity}</p>
                    <div>
                        <button onClick={() => addItemToCart(id, name, price, description)}>Add to Cart</button>
                        <button onClick={() => removeItemFromCart(id)}>Remove from Cart</button>
                        <button onClick={() => getDetails(id)}>Product Information</button>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Cart;