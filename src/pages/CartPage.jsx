import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

function CartPage({
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem
}) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const deliveryCharge = cartItems.length > 0 ? 0 : 0;
  const total = subtotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>You haven't added any products to your cart yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <div className="cart-heading">
        <h1>Shopping Cart</h1>
        <p>{cartItems.length} product(s) in your cart</p>
      </div>

      <div className="cart-layout">

        {/* Cart Products */}
        <div className="cart-items-section">

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                className="cart-product-image"
              />

              <div className="cart-product-info">
                <p className="cart-category">{item.category}</p>
                <h3>{item.name}</h3>

                <div className="cart-item-price">
                  ₹{item.price}
                </div>

                <div className="cart-quantity">
                  <button
                    type="button"
                    onClick={() =>
                      onUpdateQuantity(
                        item.id,
                        Math.max(1, (item.quantity || 1) - 1)
                      )
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{item.quantity || 1}</span>

                  <button
                    type="button"
                    onClick={() =>
                      onUpdateQuantity(
                        item.id,
                        (item.quantity || 1) + 1
                      )
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="remove-cart-item"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>

              <div className="cart-item-total">
                ₹{item.price * (item.quantity || 1)}
              </div>

            </div>
          ))}

          <Link to="/products" className="back-to-products">
            ← Continue Shopping
          </Link>

        </div>

        {/* Order Summary */}
        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-delivery">FREE</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <strong>Total Amount</strong>
            <strong>₹{total}</strong>
          </div>

          <button
            type="button"
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout →
          </button>

          <p className="cart-secure-note">
            🔒 Safe and Secure Shopping
          </p>

        </div>

      </div>
    </div>
  );
}

export default CartPage;