import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCT, REVIEWS } from '../Endpoints';
import '../Styles/Product.scss';

const Product = () => {
    let { id } = useParams();
    const formRef = useRef(null)
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

    const handleOnClick = async (e) => {
        e.preventDefault()
        setloading(true)
        try {
            await Axios.post(REVIEWS, {
                "headline": formRef.current[0].value,
                "author": formRef.current[1].value,
                "star_rating": formRef.current[2].value,
                "body": formRef.current[3].value,
                "productId": id
            })
        } catch (error) {
            console.error(error)
        } finally{
            setloading(false)
        }

    }

    if (loading) {
        return <div>....Loading</div>
    }

    return <div className="Product">
        {/* Imaginary product image */}
        <img
            src="https://res.cloudinary.com/hwery4evq/image/upload/c_pad,f_auto,q_auto,w_400/v1/layouts/dining-room"
            alt={`${product.name}`} />
        <h1>{product.name}</h1>

        <form ref={formRef}>
            <h2>Add your review</h2>
            <input placeholder="Title" id="title" />
            <input placeholder="Author" id="author" />
            <input type="number" id="star" min="0" max="5" placeholder="rating 0 to 5" />
            <textarea placeholder="Enter your review..." id="body"></textarea>

            <div className="btn-container">
                <button className="btn" onClick={handleOnClick}> Add </button>
                <Link className="btn" to={`${id}/reviews`}>
                    See reviews
                </Link>
            </div>
        </form>
    </div>
}

export default Product