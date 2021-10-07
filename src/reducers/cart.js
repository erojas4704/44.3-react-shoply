import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM } from "./actionTypes";

const INITIAL_STATE = [];

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const product = state.find(product => product.id === action.product.id) || action.product;
            product.quantity = product.quantity ? product.quantity + 1 : 1;

            return [...state.filter(product => action.product.id !== product.id), product];
        case REMOVE_FROM_CART:
            return state.filter(product => product.id !== action.product.id);
        case UPDATE_CART_ITEM:
            return [...state.filter(product => action.product.id !== product.id), action.product];
        default:
            return state;
    }
}