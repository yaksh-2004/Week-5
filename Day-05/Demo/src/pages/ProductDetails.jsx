import { useParams } from "react-router-dom";
import Products from "../components/Products";

function ProductDetails() {
 
   let { id } = useParams();
    const product = Products.find(product => String(product.id) === id);

    return (
        <>
            <section key={id} className="details-section">
                <img src={product.image} alt="" width={500}></img>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                </div>
            </section>
       </>
    )
}

export default ProductDetails;