import React from "react"
import Prod from "./Prod"
import { useSelector } from "react-redux"
import './ProdList.css'


const ProdList = ({ displayCost, addItemToCart, removeItemFromCart, displayPurchased }) => {

    const inventory = useSelector(state => state.inventory)
    
    return (
        <div className="ProdList">
            <h2>ProdList</h2>
            <h3>Total Cost: {displayCost()}</h3>

            {inventory.map(prod => {
                return <Prod
                    name={prod.name}
                    price={prod.price}
                    description={prod.description}
                    img={prod.image_url}
                    id={prod.id}
                    key={prod.id}
                    addItemToCart ={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    displayPurchased={displayPurchased}
                />
            })}

        </div>
    )
}

export default ProdList