import { Link } from "react-router-dom";

export default function Product({ product, handleAddToCart, handleRemoveFromCart }) {

    return (
        <div className="card" style={{width: '18rem', margin: '3px'}}>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="card-subtitle mb-2 text-muted">{product.price}</div>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <Link to={`/product/${product.id}`}><button className="btn btn-success">Details</button></Link>
            </div>
        </div>
    )
}