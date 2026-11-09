import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <p>WELCOME TO STYLECART</p>
        <h1>Style That Speaks, Quality That Lasts</h1>
        <p>
          Discover fashion, beauty and lifestyle products
          that make every moment special.
        </p>
        <Link to="/products" className="about-shop-btn">
          Explore Products
        </Link>
      </section>

      {/* Our Story */}
      <section className="about-story">

        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85"
            alt="StyleCart Fashion Store"
          />
        </div>

        <div className="about-story-content">
          <span>OUR STORY</span>
          <h2>Welcome to StyleCart</h2>

          <p>
            StyleCart is your one-stop destination for fashion,
            beauty and lifestyle shopping. We bring together
            stylish collections and everyday essentials
            to make your shopping experience enjoyable.
          </p>

          <p>
            From ethnic wear and western outfits to handbags,
            footwear, jewellery and accessories, we offer
            a variety of products to match your style.
          </p>

          <p>
            Our goal is to make online shopping simple,
            convenient and enjoyable for everyone.
          </p>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="about-mission">

        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            To provide quality products, stylish collections
            and a convenient shopping experience at affordable
            prices.
          </p>
        </div>

        <div className="mission-card">
          <div className="mission-icon">👁️</div>
          <h2>Our Vision</h2>
          <p>
            To become a trusted shopping destination where
            every customer finds something they truly love.
          </p>
        </div>

      </section>

      {/* Why Choose Us */}
      <section className="about-why">

        <div className="about-section-heading">
          <span>WHY STYLECART?</span>
          <h2>Why Choose Us</h2>
          <p>
            We make every shopping experience special.
          </p>
        </div>

        <div className="about-features">

          <div className="about-feature-card">
            <div>✨</div>
            <h3>Trendy Collections</h3>
            <p>
              Discover fashionable products for every
              occasion and personal style.
            </p>
          </div>

          <div className="about-feature-card">
            <div>💎</div>
            <h3>Quality Products</h3>
            <p>
              Explore carefully selected products
              for your everyday needs.
            </p>
          </div>

          <div className="about-feature-card">
            <div>💰</div>
            <h3>Affordable Prices</h3>
            <p>
              Enjoy stylish shopping with prices
              that suit your budget.
            </p>
          </div>

          <div className="about-feature-card">
            <div>❤️</div>
            <h3>Customer Focus</h3>
            <p>
              Your shopping satisfaction is
              important to us.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom Banner */}
      <section className="about-bottom">

        <h2>Find Your Style with StyleCart!</h2>

        <p>
          Your favourite fashion and lifestyle collections
          are just one click away.
        </p>

        <Link to="/products" className="about-shop-btn">
          Start Shopping
        </Link>

      </section>

    </div>
  );
}

export default AboutUsPage;