import React from "react";
import { Link } from "react-router-dom";
import "../styles/DealsPage.css";

const deals = [
  {
    id: "deal-denim-jeans",
    name: "Denim Jeans",
    category: "Western Wear",
    price: 999,
    oldPrice: 1499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "deal-elegant-saree",
    name: "Elegant Silk Saree",
    category: "Ethnic Wear",
    price: 1499,
    oldPrice: 2499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "deal-stylish-top",
    name: "Stylish Top",
    category: "Western Wear",
    price: 599,
    oldPrice: 999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "deal-handbag",
    name: "Classic Handbag",
    category: "Handbags",
    price: 899,
    oldPrice: 1499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "deal-sneakers",
    name: "Casual Sneakers",
    category: "Footwear",
    price: 1199,
    oldPrice: 1999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "deal-sunglasses",
    name: "Stylish Sunglasses",
    category: "Accessories",
    price: 499,
    oldPrice: 899,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
  }
];

function DealsPage() {
  return (
    <div className="deals-page">

      <section className="deals-banner">
        <p>STYLECART SPECIAL OFFERS</p>
        <h1>Big Deals, Beautiful Savings!</h1>
        <h2>Up to 50% OFF</h2>
        <p>Discover your favourite products at amazing prices.</p>
        <Link to="/products" className="deals-shop-btn">
          Shop All Products
        </Link>
      </section>

      <section className="deals-section">

        <div className="deals-heading">
          <div>
            <h2>Today's Best Deals</h2>
            <p>Grab your favourite products before the offers end!</p>
          </div>
          <span>{deals.length} Offers</span>
        </div>

        <div className="deals-grid">

          {deals.map((product) => {
            const discount = Math.round(
              ((product.oldPrice - product.price) /
              product.oldPrice) * 100
            );

            return (
              <div className="deal-card" key={product.id}>

                <Link
                  to={`/product/${encodeURIComponent(product.id)}`}
                  state={{ product }}
                  className="deal-image-link"
                >
                  <div className="deal-image-box">
                    <img src={product.image} alt={product.name} />
                    <span className="deal-discount">
                      {discount}% OFF
                    </span>
                  </div>
                </Link>

                <div className="deal-details">
                  <p className="deal-category">{product.category}</p>

                  <h3>
                    <Link
                      to={`/product/${encodeURIComponent(product.id)}`}
                      state={{ product }}
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="deal-rating">
                    ⭐ {product.rating} / 5
                  </p>

                  <div className="deal-prices">
                    <strong>₹{product.price}</strong>
                    <del>₹{product.oldPrice}</del>
                  </div>

                  <Link  to={`/product/${encodeURIComponent(product.id)}`}
                    state={{ product }}
                    className="deal-view-btn"
                  >
                    View Deal
                  </Link>
                </div>

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}

export default DealsPage;