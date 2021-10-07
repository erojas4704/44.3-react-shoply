import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router"
import { Link } from "react-router-dom";

export default function ProductView() {
    const { id } = useParams();
    const products = useSelector(store => store.products);

    const product = products.find(p => p.id === id);
    if(!product){
        return <Redirect to="/" />
    }

    return (
        <div className="product-view">
            <div className="display-4">{product.name}</div>
            <div className="lead">{product.description}</div>
            <Link to="/"><button className="btn btn-primary">Back</button></Link>
        </div>
    )
}