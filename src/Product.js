import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating).fill().map((_, i) => (
            <p key={i}>⭐</p>
          ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <div className="product_buttons">
        <button onClick={addToBasket} className="add-button">Add to Basket</button>

        <div className="impact-product-section">
          <img src="/impactproduct.png" alt="Eco Icon" className="impact-icon" />
          <button onClick={addToBasket} className="impact-button">Impact Product</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
