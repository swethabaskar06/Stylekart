import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/ProductDetailsPage.css";

function ProductDetailsPage({ onAddToCart }) {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="details-not-found">
        <h2>Product Not Found</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...product,
        quantity: quantity
      });

      alert(product.name + " added to cart!");
    }
  };

  return (
    <div className="product-details-container">

      <div className="details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="details-info">

        <h1>{product.name}</h1>

        <p>⭐ {product.rating} / 5</p>

        <h2>₹{product.price}</h2>

        <p>
          <del>₹{product.oldPrice}</del>
        </p>

        <p>
          You Save ₹{product.oldPrice - product.price}
        </p>

        <h3>Product Description</h3>

        <p>
          Premium quality product from StyleCart.
          Perfect for your collection.
        </p>

        <div className="quantity-box">

          <button
            onClick={() =>
              setQuantity(Math.max(1, quantity - 1))
            }
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>

        </div>

        <h3>Total: ₹{product.price * quantity}</h3>

        <button
          className="details-cart-btn"
          onClick={handleAddToCart}
        >
          🛒 Add to Cart
        </button>

        <Link to="/products">
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default ProductDetailsPage;