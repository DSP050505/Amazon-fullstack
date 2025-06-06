import React from 'react';
import "./Greenproducts.css";
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

    const showCertifications = () => {
        console.log("Showing certifications for:", title);
    };

    // Helper to interpolate between two RGB colors
    const interpolateColor = (color1, color2, factor) => {
        const result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
    };

    // Return dynamic color based on rating %
    const getEcoColor = (percentage) => {
        const p = Math.min(100, Math.max(0, percentage));
        if (p <= 50) {
            const ratio = p / 50;
            // Orange to Yellow
            return interpolateColor([255, 87, 34], [255, 235, 59], ratio);
        } else {
            const ratio = (p - 50) / 50;
            // Yellow to Green
            return interpolateColor([255, 235, 59], [76, 175, 80], ratio);
        }
    };

    const ecoColor = getEcoColor(rating);

    return (
        <div className='Greenproduct'>
            <div className='Greenproduct_info'>
                <p>{title}</p>
                <p className='Greenproduct_price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img src={image} alt={title} />

            {/* Eco Pulse Score Bar Below Image */}
            <div className="EcoPulseContainer">
                <div
                    className="EcoPulseBar"
                    style={{
                        width: `${rating}%`,
                        backgroundColor: ecoColor,
                        boxShadow: `0 0 8px ${ecoColor}AA`,
                    }}
                    aria-label={`Eco Pulse Score: ${rating}%`}
                ></div>
                <span className="EcoPulseLabel"> <h3> {rating}% Eco Pulse</h3></span>
            </div>

            
            <div className="Greenproduct_buttons">
        <button onClick={addToBasket} className="add-button">Add to Basket</button>

        <div className="certification-section">
          <img src="/certification1.png" alt="certification Icon" className="certification-icon" />
          <button onClick={showCertifications} className="certifications-btn">Certifications</button>
        </div>
      </div>
        </div>
    );
}

export default Product;
