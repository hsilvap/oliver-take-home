import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../Endpoints';
import '../Styles/Home.scss';

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await Axios.get(PRODUCTS)
      setProducts(data)
    }
    getProducts()
  }, [])

  return <div className="Home">
    <img
      src="https://res.cloudinary.com/hwery4evq/image/upload/c_scale,w_400/v1/assets/toast"
      alt="welcome" />
    <h1>
      Welcome!
    </h1>

    <h2>
      Take a look at our products:
   </h2>

    <ul>
      {products.map(p => <li key={p.id}>
        <Link to={`/${p.id}`} >{p.name}</Link>
      </li>)}
    </ul>

  </div>
}

export default Home;
