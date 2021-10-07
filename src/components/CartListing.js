export default function CartListing({ product, handleRemove, handleQuantity }){
    const updateQuantity = (e) => {
        handleQuantity(product, e.target.value);
    }
    
    return (
        <li className="list-group-item">
            <p>{product.name}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name="quantity" id="quantity" value={product.quantity} onChange={updateQuantity}/>
            <button className="btn btn-danger" onClick={() => handleRemove(product)}>Remove</button>
        </li>
    )
}