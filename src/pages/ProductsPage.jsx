import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsPage.css";

const categoryData = {
  "Ethnic Wear": [
    ["Designer Kurti", 1299, 1799, 4.5, "photo-1583391733956-6c78276477e3"],
    ["Elegant Saree", 1799, 2499, 4.7, "photo-1610030469983-98e550d6193c"],
    ["Party Wear Lehenga", 2499, 3299, 4.8, "photo-1583391733981-849840b4e5c0"]
  ],
  "Western Wear": [
    ["Stylish Top", 899, 1299, 4.5, "photo-1551163943-3f6a855d1153"],
    ["Denim Jeans", 1499, 1999, 4.6, "photo-1541099649105-f69ad21f3246"],
    ["Floral Dress", 1199, 1599, 4.4, "photo-1539008835657-9e8e9680c956"]
  ],
  Handbags: [
    ["Classic Tote Bag", 999, 1499, 4.5, "photo-1584917865442-de89df76afd3"],
    ["Designer Sling Bag", 1299, 1799, 4.7, "photo-1590874103328-eac38a683ce7"],
    ["Party Clutch", 799, 1199, 4.3, "photo-1566150905458-1bf1fc113f0d"]
  ],
  Footwear: [
    ["High Heels", 1299, 1799, 4.6, "photo-1543163521-1bf539c55dd2"],
    ["Casual Sneakers", 1599, 2199, 4.5, "photo-1542291026-7eec264c27ff"],
    ["Comfort Sandals", 699, 999, 4.4, "photo-1603487742131-4160ec999306"]
  ],
  Jewellery: [
    ["Designer Earrings", 499, 799, 4.5, "photo-1535632066927-ab7c9ab60908"],
    ["Elegant Necklace", 899, 1299, 4.6, "photo-1599643478518-a784e5dc4c8f"],
    ["Fashion Bracelet", 399, 599, 4.3, "photo-1611591437281-460bfbe1220a"]
  ],
  Accessories: [
    ["Stylish Sunglasses", 599, 899, 4.5, "photo-1511499767150-a48a237f0083"],
    ["Classic Watch", 1499, 1999, 4.6, "photo-1523275335684-37898b6baf30"],
    ["Fashion Belt", 499, 699, 4.4, "photo-1624222247344-550fb8d7fbb6"]
  ],
  "Beauty & Makeup": [
    ["Matte Lipstick", 399, 599, 4.5, "photo-1586495777744-4413f21062fa"],
    ["Makeup Kit", 999, 1499, 4.6, "photo-1596462502278-27bfdc403348"],
    ["Makeup Brush Set", 699, 999, 4.4, "photo-1522335789203-aabd1fc54bc9"]
  ],
  Skincare: [
    ["Face Serum", 599, 899, 4.5, "photo-1608248543803-ba4f8c70ae0b"],
    ["Face Moisturizer", 499, 699, 4.4, "photo-1556229010-6c3f2c9ca5f8"],
    ["Sunscreen", 399, 599, 4.6, "photo-1556228720-195a672e8a03"]
  ],
  Electronics: [
    ["Wireless Earbuds", 1499, 1999, 4.5, "photo-1606220945770-b5b6c2c55bf1"],
    ["Smart Watch", 1999, 2799, 4.6, "photo-1523275335684-37898b6baf30"],
    ["Headphones", 1299, 1799, 4.4, "photo-1505740420928-5e560c06d30e"]
  ],
  "Home & Living": [
    ["Decorative Lamp", 999, 1499, 4.5, "photo-1507473885765-e6ed057f782c"],
    ["Home Cushion", 499, 799, 4.4, "photo-1584100936595-c0654b55a2e2"],
    ["Flower Vase", 699, 999, 4.6, "photo-1578500494198-246f612d3b3d"]
  ]
};

const categories = [
  "All Categories",
  ...Object.keys(categoryData)
];

const products = Object.entries(categoryData).flatMap(
  ([category, items]) =>
    items.map((item, index) => ({
      id: `${category}-${index}`,
      category: category,
      name: item[0],
      price: item[1],
      oldPrice: item[2],
      rating: item[3],
      image: `https://images.unsplash.com/${item[4]}?auto=format&fit=crop&w=600&q=80`
    }))
);

function ProductsPage({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [wishlist, setWishlist] = useState([]);

  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
    } else {
      alert(product.name + " added to cart!");
    }
  };

  return (
    <div className="products-page">

      {/* Sidebar */}
 <aside className="products-sidebar">
        <h2>Categories</h2>

        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category
                ? "category-option active"
                : "category-option"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </aside>

      {/* Products Section */}
      <main className="products-content">

        <div className="products-title">
          <div>
            <h1>{selectedCategory}</h1>
            <p>Discover your favourite collection</p>
          </div>

          <span>{filteredProducts.length} Products</span>
        </div>

        <div className="products-grid">

          {filteredProducts.map((product) => {

            const discount = Math.round(
              ((product.oldPrice - product.price) /
                product.oldPrice) * 100
            );

            return (
              <div className="product-card" key={product.id}>

                {/* Product Image */}
                <div className="product-image-box">

                  <Link
                    to={`/product/${encodeURIComponent(product.id)}`}
                    state={{ product: product }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>

                  <span className="discount-label">
                    {discount}% OFF
                  </span>

                  <button
                    className="wishlist-btn"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    {wishlist.includes(product.id) ? "❤️" : "♡"}
                  </button>

                </div>

                {/* Product Information */}
                <div className="product-details">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <h3>
                    <Link
                      to={`/product/${encodeURIComponent(product.id)}`}
                      state={{ product: product }}
                      style={{
                        color: "#5C4033",
                        textDecoration: "none"
                      }}
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="product-rating">
                    ⭐ {product.rating}
                  </p>

                  <div className="product-prices">
                    <strong>₹{product.price}</strong>
                    <del>₹{product.oldPrice}</del>
                  </div>

                  <button
                    className="add-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    🛒 Add to Cart
                  </button>

                </div>
              </div>
            );
          })}

        </div>
      </main>
    </div>
  );
}

export default ProductsPage;