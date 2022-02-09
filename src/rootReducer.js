import { CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";
import data from './data.json'

const products = data.products
const prodArr = [];
for (const [key, value] of Object.entries(products)) {
    value.id = key
    prodArr.push(value)
}

const INITIAL_STATE = { cart: [], inventory: prodArr };

// re-factor to remove OR reduce quantity by 1
const removeProd = (prodArray, id) =>
    prodArray.filter(prod => prod.id !== id)


const increaseQuantity = (prodArray, id) => {
    return prodArray.map(prod => {
        if (prod.id === id) prod.quantity++
        return prod
    })
}

const decreaseQuantity = (prodArray, id) => {
    return prodArray.map(prod => {
        if (prod.id === id) prod.quantity--
        return prod
    })
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        // newItem is payload
        case ADD_TO_CART:
            console.log('state-add', state.cart)
            return { ...state, cart: [...state.cart, action.newItem] }

        case INCREASE_QUANTITY:
            return { ...state, cart: increaseQuantity(state.cart, action.id) }

        // id is payload
        case REMOVE_FROM_CART:
            console.log('state-remove', state.cart)
            return { ...state, cart: removeProd(state.cart, action.id) };

        case DECREASE_QUANTITY:
            return { ...state, cart: decreaseQuantity(state.cart, action.id) }

        case CLEAR_CART:
            return { ...state, cart: INITIAL_STATE };

        default:
            return state;
    }
}

export default rootReducer