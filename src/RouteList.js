import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProdList from "./ProdList";
import ProdDetail from "./ProdDetail";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "./actions"




const RouteList = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const displayCost = () => {
        let cost = 0;
        for (const item of cart) {
            cost += (item.price * item.quantity)
        }
        return cost
    }

    const addItemToCart = (id, name, price, description) => {

        // if cart already contains this item, quantity++
        // don't add newItem to cart []
        for (const item of cart) {
            if (item.id === id) {
                dispatch(increaseQuantity(id))
                return
            }
        }

        const newItem = {
            id,
            name,
            price,
            description,
            // img,
            quantity: 1
        }

        // w/o imported funcs
        // dispatch({type: ADD_TO_CART, newItem: newItem})

        // addToCart function has type: ADD_TO_CART inside it
        dispatch(addToCart(newItem))
    }

    const removeItemFromCart = (id) => {
        for (const item of cart) {
            if (item.id === id) {
                if (item.quantity > 1) {
                    dispatch(decreaseQuantity(id))
                    return
                }
                dispatch(removeFromCart(id))
            }
        }
    }

    const displayPurchased = (id) => {
        console.log('disp purchase')
        for (const item of cart) {
            if (item.id === id) return item.quantity
        }
        return 0
    }


    return (
        <Routes>
            <Route path="/products" element={<ProdList displayCost={displayCost} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} displayPurchased={displayPurchased} />} />
            <Route path="/products/:id" element={<ProdDetail  addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} displayPurchased={displayPurchased}  />} />
            <Route path="/cart" element={<Cart displayCost={displayCost} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}  />} />
            <Route path="/" element={<Navigate replace to="/products" />} />
            <Route path='*' element={<Navigate replace to="/products" />} />

        </Routes>
    )

}

export default RouteList;