import React from "react"
import { useNavigate } from "react-router-dom"
import './Prod.css'

const Prod = ({ id, name, price, description, img, addItemToCart, removeItemFromCart, displayPurchased }) => {
    
    const navigate = useNavigate()
    const getDetails = () => navigate(`/products/${id}`)

    return (
        <div className="item-div">
            <p><b>Name:</b> {name}</p>
            <p><b>Price:</b> {price} </p>
            <p><b>Quantiy Purchased:</b> {displayPurchased(id)}</p>
            <button onClick={()=>addItemToCart(id, name, price, description)}>Add to Cart</button>
            <button onClick={()=>removeItemFromCart(id)}>Remove from Cart</button>
            <button onClick={getDetails}>Product Information</button>
        </div>
    )
}

export default Prod;