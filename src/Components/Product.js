import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCT } from '../Endpoints';
import '../Styles/Product.scss';

const Product = () => {
    let { id } = useParams();
    const [product, setproduct] = useState({})
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await Axios.get(PRODUCT(id))
            setproduct(data)
            setloading(false)
        }
        getProduct()
    }, [])

    if (loading) {
        return <div>....Loading</div>
    }

    return <div className="Product">
        {/* Imaginary product image */}
        <img
            src="https://res.cloudinary.com/hwery4evq/image/upload/c_pad,f_auto,q_auto,w_400/v1/layouts/dining-room"
            alt={`${product.name}`} />
        <h1>{product.name}</h1>

        <form>
            <h2>Add your review</h2>
            <input />
            <div className="star-rating">
                {[...Array(5)].map((star) => {
                    return (
                        <span className="star">&#9733;</span>
                    );
                })}
            </div>
            <input />
            <textarea></textarea>
            
            <div className="btn-container">
                <button className="btn">Add </button>
                <Link className="btn" to={`${id}/reviews`}>
                    See reviews
                </Link>
            </div>
        </form>
    </div>
}

export default Product