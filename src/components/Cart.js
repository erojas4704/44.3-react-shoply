import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateCartListing } from "../reducers/actions";
import CartListing from "./CartListing";

export default function Cart({ className }) {
    const cart = useSelector(store => store.cart, shallowEqual);
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(removeFromCart(product));
    }

    const handleUpdateQuantity = (product, quantity) => {
        product.quantity = +quantity;
        dispatch(updateCartListing(product));
    }

    return (
        <div className={`${className} list-group`}>
            <h3>Cart</h3>
            {cart.map(product => <CartListing key={product.id} product={product} handleRemove={handleRemove} handleQuantity={handleUpdateQuantity} />)}
        </div>
    )
}