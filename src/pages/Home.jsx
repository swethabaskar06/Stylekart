import React, { useState } from "react";
import "../App.css";
import {Link} from "react-router-dom";

function Home() {
  const [cart, setCart] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [email, setEmail] = useState("");

  const categories = [
  {
    name: "Ethnic Wear",
    slug: "ethnic-wear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500"
  },
  {
    name: "Western Wear",
    slug: "western-wear",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500"
  },
  {
    name: "Handbags",
    slug: "handbags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
  },
  {
    name: "Footwear",
    slug: "footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"
  },
  {
    name: "Jewellery",
    slug: "jewellery",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500"
  },
  {
    name: "Accessories",
    slug: "accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
  },
  {
    name: "Beauty & Makeup",
    slug: "beauty-makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500"
  },
  {
    name: "Skincare",
    slug: "skincare",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500"
  },
  {
    name: "Mobile & Gadgets",
    slug: "mobile-gadgets",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
  },
  {
    name: "Home & Living",
    slug: "home-living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500"
  }
];
  const products = [
    { id: 1, name: "Elegant Floral Dress", price: 1299, oldPrice: 1799, category: "Western Wear", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600" },
    { id: 2, name: "Traditional Ethnic Wear", price: 1899, oldPrice: 2499, category: "Ethnic Wear", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600" },
    { id: 3, name: "Classic Women's Handbag", price: 999, oldPrice: 1499, category: "Handbags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600" },
    { id: 4, name: "Elegant High Heels", price: 1499, oldPrice: 1999, category: "Footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600" }
  ];

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <div className="website">

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-heading">THE NEW SEASON COLLECTION</p>

          <h1>
            Simple Styles.<br />
            Timeless Elegance.
          </h1>

          <p className="hero-description">
            Discover clothing and accessories that bring comfort,
            confidence and style into your everyday life.
          </p>

          <a href="#shop" className="primary-btn">
            Explore Collection →
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
            alt="Fashion collection"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div>
          <span>🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders above ₹999</p>
        </div>

        <div>
          <span>↩️</span>
          <h3>Easy Returns</h3>
          <p>7 days return policy</p>
        </div>

        <div>
          <span>🔒</span>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>

        <div>
          <span>💬</span>
          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </section>
            {/* Categories */}
      <section className="categories section-padding" id="categories">
        <div className="section-heading">
          <p>EXPLORE OUR COLLECTION</p>
          <h2>Shop By Category</h2>
        </div>

        <div className="category-grid">

  {categories.map((category) => (
    <Link
      to={`/category/${category.slug}`}
      className="category-card"
      key={category.name}
    >
      <img src={category.image} alt={category.name} />

      <h3>{category.name}</h3>

      <span>Explore →</span>
    </Link>
  ))}

</div>
      </section>

      {/* Trending Products */}
      <section className="products section-padding" id="shop">
        <div className="section-heading">
          <p>HANDPICKED FOR YOU</p>
          <h2>Trending Products</h2>
          <span>Discover our most loved styles</span>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? "♥️" : "♡"}
                </button>
              </div>

              <div className="product-info">
                <p>{product.category}</p>
                <h3>{product.name}</h3>
                <div className="price">
                  <strong>₹{product.price}</strong>
                  <del>₹{product.oldPrice}</del>
                </div>

                <button
                  className="add-cart"
                  onClick={() => setCart(cart + 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer */}
      <section className="offer-section">
        <div className="offer-image">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900"
            alt="Fashion sale"
          />
        </div>

        <div className="offer-content">
          <p>LIMITED TIME OFFER</p>
          <h2>Style More.<br />Spend Less.</h2>
          <h3>UP TO 50% OFF</h3>
          <p>Find your favourite styles at amazing prices.</p>
          <a href="#shop" className="primary-btn">Shop Offers →</a>
        </div>
      </section>

      {/* New Arrivals Preview */}
      <section className="new-arrivals section-padding" id="new-arrivals">
        <div className="section-heading">
          <p>JUST ARRIVED</p>
          <h2>New Arrivals</h2>
          <span>Fresh styles for your wardrobe</span>
        </div>

        <div className="arrival-grid">
          <div>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600" alt="New fashion" />
            <h3>Everyday Fashion</h3>
            <p>Discover your everyday look</p>
          </div>

<div>
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600" alt="New collection" />
            <h3>Modern Collection</h3>
            <p>Style that speaks for you</p>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600" alt="Latest trends" />
            <h3>Latest Trends</h3>
            <p>Stay stylish every day</p>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-section" id="about">
        <p>OUR STORY</p>
        <h2>Fashion Made Simple.</h2>
        <p>
          At StyleCart, we believe fashion should be simple, comfortable
          and affordable. Explore styles that make you feel confident
          every day.
        </p>
        <a href="#contact">Know More →</a>
      </section>

      {/* Newsletter */}
      <section className="newsletter" id="contact">
        <h2>Join Our Style Community</h2>
        <p>Subscribe to receive updates, offers and latest collections.</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          if (email.trim()) {
            alert("Thank you for subscribing!");
            setEmail("");
          }
        }}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h2>stylecart.</h2>
          <p>Your style, your choice, your confidence.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#about">About</a>
        </div>

        <div>
          <h3>Customer Service</h3>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Shipping Policy</a>
          <a href="#contact">Return Policy</a>
        </div>

        <div>
          <h3>Follow Us</h3>
          <p>Instagram | Facebook | Pinterest</p>
        </div>

        <p className="copyright">
          © 2026 StyleCart. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;