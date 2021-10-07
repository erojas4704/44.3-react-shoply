import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM, UPDATE_MARKETPLACE } from "./actionTypes";

export function updateMarketplace(products) {
    return {
        type: UPDATE_MARKETPLACE,
        products
    }
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        product
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        product
    }
}

export function updateCartListing(product) {
    return {
        type: UPDATE_CART_ITEM,
        product
    }
}