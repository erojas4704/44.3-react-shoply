import { UPDATE_MARKETPLACE } from "./actionTypes";

const INITIAL_STATE = [];

export default function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_MARKETPLACE:
            return Object.keys(action.products).map(key => {
                return { ...action.products[key], id: key };
            });
        default:
            return state;
    }
}