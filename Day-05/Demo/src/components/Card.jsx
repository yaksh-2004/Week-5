import { Link } from "react-router-dom";
import Products from "./Products";

const Card = () => {

   const productItems = Products.map(store =>{
        const {id, title, description, image} = store;
        return(
            <div key={ id } className="card">
                <img src={image} alt=""></img>
                <h3>{title}</h3>
                <p>{description.slice(0, 100)}<Link to={`/product/${id}`}>Description</Link></p>
            </div>
        )
    })

    return (
        <>
            <section className="card-section">
                {productItems}
            </section>
        </>
    );
};

export default Card;