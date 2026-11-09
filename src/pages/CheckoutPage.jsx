import React, { useState } from "react";
import "../styles/Checkout.css";

function Checkout() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [placed, setPlaced] = useState(false);

  // Cart items
  const cartItems = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) *
      Number(item.quantity || 1),
    0
  );

  const delivery = subtotal > 0 ? 50 : 0;
  const total = subtotal + delivery;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const order = {
      ...form,
      items: cartItems,
      subtotal,
      delivery,
      total,
      orderDate: new Date().toISOString(),
      status: "Pending"
    };

    localStorage.setItem(
      "latestOrder",
      JSON.stringify(order)
    );

    setPlaced(true);
    localStorage.removeItem("cart");
  };

  if (placed) {
    return (
      <div className="success-page">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with us.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-layout">

        {/* DELIVERY ADDRESS */}
        <form
          className="address-section"
          onSubmit={handlePlaceOrder}
        >
          <h2>Delivery Address</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                pattern="[0-9]{10}"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>PIN Code</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter PIN code"
                pattern="[0-9]{6}"
                value={form.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group full-width">
              <label>Full Address</label>
              <textarea
                name="address"
                placeholder="House number, street, area"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
<label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={form.state}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button
            type="submit"
            className="place-order-btn"
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>

        </form>

        {/* ORDER SUMMARY */}
        <div className="summary-section">

          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="summary-product" key={item.id || index}>
                {item.image && (
                  <img src={item.image} alt={item.name || item.title} />
                )}

                <div>
                  <h4>{item.name || item.title}</h4>
                  <p>Qty: {item.quantity || 1}</p>
                  <p>
                    ₹{Number(item.price || 0) *
                      Number(item.quantity || 1)}
                  </p>
                </div>
              </div>
            ))
          )}

          <hr />

          <div className="price-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="price-row">
            <span>Delivery Charge</span>
            <span>₹{delivery}</span>
          </div>

          <hr />

          <div className="price-row total-row">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;