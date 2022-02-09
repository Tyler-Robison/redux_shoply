import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProdDetail.css'

const ProdDetail = ({ addItemToCart, removeItemFromCart, displayPurchased }) => {

    const inventory = useSelector(state => state.inventory);
    // const cart = useSelector(state => state.cart)
    const { id } = useParams();

    const prod = inventory.filter(prod => prod.id === id)[0]
    const { name, price, description, image_url } = prod

    return (
        <div>
            <h1>{name}</h1>
            <p><b>${price}</b> </p>
            <p> {description}</p>
            <img className="prod-img" src={image_url}></img>
            <div>
                <button onClick={() => addItemToCart(id, name, price, description)}>Add to Cart</button>
                <button onClick={() => removeItemFromCart(id)}>Remove from Cart</button>
            </div>
            <p><b>Quantity Purchased:</b> {displayPurchased(id)}</p>
        </div>
    )
}

export default ProdDetail;