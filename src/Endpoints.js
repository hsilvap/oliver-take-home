const PRODUCT = (prodId) => `http://localhost:3004/products/${prodId}`
const PRODUCTS = 'http://localhost:3004/products';
const PRODUCT_REVIEWS = (prodId) => `http://localhost:3004/products/${prodId}/reviews`
const REVIEWS = 'http://localhost:3004/reviews';

export { PRODUCT, PRODUCTS, PRODUCT_REVIEWS, REVIEWS }