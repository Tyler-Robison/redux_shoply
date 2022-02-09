import { CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";


export const addToCart = (newItem) => ({
    type: ADD_TO_CART,
    newItem
})

export const increaseQuantity = (id) => ({
    type: INCREASE_QUANTITY,
    id
})

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

export const decreaseQuantity = (id) => ({
    type: DECREASE_QUANTITY,
    id
})

export const clearCart = () => ({type: CLEAR_CART})