import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCT, PRODUCT_REVIEWS } from '../Endpoints';
import '../Styles/Review.scss';

const Reviews = () => {
    let { id } = useParams();
    const [product, setproduct] = useState({})
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const getProductAndReviews = async () => {
            const { data } = await Axios.get(PRODUCT(id))
            const { data: reviews } = await Axios.get(PRODUCT_REVIEWS(id))
            setproduct({ ...data, reviews })
            setloading(false)
        }
        getProductAndReviews()
    }, [])

    if (loading) {
        return <div>....Loading</div>
    }

    return <div className="Review">
        {/* Imaginary product image */}
        <img
            src="https://res.cloudinary.com/hwery4evq/image/upload/c_pad,f_auto,q_auto,w_400/v1/layouts/dining-room"
            alt={`${product.name}`} />
        <h1>{product.name} Reviews</h1>

        <section>
            {product.reviews.length > 0 ? product.reviews.map(p => {
                return <div className="detail" key={p.id}>
                    <div> <h2> Title</h2> <span> {p.author} </span></div>
                    <div> <span> Star rating</span> <span> {p.star_rating} </span></div>
                    <div> <span> Body</span> <p> {p.body} </p></div>
                    <div> <small> Author</small> <small> {p.author} </small></div>
                </div>
            }): <h1> No reviews yet! </h1>}
        </section>
    </div>
}

export default Reviews