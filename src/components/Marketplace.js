import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateMarketplace } from "../reducers/actions";
import Cart from "./Cart";
import Product from "./Product";
import "./marketplace.css";

export default function Marketplace() {
    const dispatch = useDispatch();
    const products = useSelector(store => store.products);

    //Load all my products on mount
    useEffect(() => {
        const loadProductLibrary = async () => {
            const res = await axios.get("./data.json");
            dispatch(updateMarketplace(res.data.products));
        }
        loadProductLibrary();
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = product => {
        dispatch(removeFromCart(product));
    }

    return (
        <div className="marketplace">
            <Cart className="sidepanel" />
            <div className="listings">
                {products && products.map(product => {
                    return <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                })}
            </div>
        </div>
    )
}