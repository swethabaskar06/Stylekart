import React from "react";
import { useParams,Link} from "react-router-dom";
import "../styles/CategoryPage.css";

const categoryProducts = {
  "ethnic-wear": {
    title: "Ethnic Wear",
    products: [
      { id: 1, name: "Designer Kurti", price: 1299, oldPrice: 1799, rating: 4.5, image: "https://images.unsplash.com/photo-1583391733956-6c78276477e3?w=500" },
      { id: 2, name: "Elegant Silk Saree", price: 1799, oldPrice: 2499, rating: 4.7, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500" },
      { id: 3, name: "Party Wear Lehenga", price: 2499, oldPrice: 3299, rating: 4.8, image: "https://images.unsplash.com/photo-1583391733981-849840b4e5c0?w=500" }
    ]
  },

  "western-wear": {
    title: "Western Wear",
    products: [
      { id: 4, name: "Stylish Top", price: 899, oldPrice: 1299, rating: 4.5, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=500" },
      { id: 5, name: "Denim Jeans", price: 1499, oldPrice: 1999, rating: 4.6, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500" },
      { id: 6, name: "Floral Dress", price: 1199, oldPrice: 1599, rating: 4.4, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500" }
    ]
  },

  handbags: {
    title: "Handbags",
    products: [
      { id: 7, name: "Classic Tote Bag", price: 999, oldPrice: 1499, rating: 4.5, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
      { id: 8, name: "Designer Sling Bag", price: 1299, oldPrice: 1799, rating: 4.7, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500" },
      { id: 9, name: "Party Clutch", price: 799, oldPrice: 1199, rating: 4.3, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500" }
    ]
  },

  footwear: {
    title: "Footwear",
    products: [
      { id: 10, name: "Stylish High Heels", price: 1299, oldPrice: 1799, rating: 4.6, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500" },
      { id: 11, name: "Casual Sneakers", price: 1599, oldPrice: 2199, rating: 4.5, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
      { id: 12, name: "Comfort Sandals", price: 699, oldPrice: 999, rating: 4.4, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500" }
    ]
  },

  jewellery: {
    title: "Jewellery",
    products: [
      { id: 13, name: "Designer Earrings", price: 499, oldPrice: 799, rating: 4.5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500" },
      { id: 14, name: "Elegant Necklace", price: 899, oldPrice: 1299, rating: 4.6, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500" },
      { id: 15, name: "Fashion Bracelet", price: 399, oldPrice: 599, rating: 4.3, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500" }
    ]
  },

  accessories: {
    title: "Accessories",
    products: [
      { id: 16, name: "Stylish Sunglasses", price: 599, oldPrice: 899, rating: 4.5, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500" },
      { id: 17, name: "Classic Watch", price: 1499, oldPrice: 1999, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
      { id: 18, name: "Fashion Belt", price: 499, oldPrice: 699, rating: 4.4, image: "https://images.unsplash.com/photo-1624222247344-550fb8d7fbb6?w=500" }
    ]
  },

  "beauty-makeup": {
    title: "Beauty & Makeup",
    products: [
      { id: 19, name: "Matte Lipstick", price: 399, oldPrice: 599, rating: 4.5, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500" },
      { id: 20, name: "Makeup Kit", price: 999, oldPrice: 1499, rating: 4.6, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500" },
 { id: 21, name: "Makeup Brush Set", price: 699, oldPrice: 999, rating: 4.4, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500" }
    ]
  },

  skincare: {
    title: "Skincare",
    products: [
      { id: 22, name: "Face Serum", price: 599, oldPrice: 899, rating: 4.5, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500" },
      { id: 23, name: "Face Moisturizer", price: 499, oldPrice: 699, rating: 4.4, image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500" },
      { id: 24, name: "Sunscreen", price: 399, oldPrice: 599, rating: 4.6, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500" }
    ]
  },

  "mobile-gadgets": {
    title: "Electronics",
    products: [
      { id: 25, name: "Wireless Earbuds", price: 1499, oldPrice: 1999, rating: 4.5, image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500" },
      { id: 26, name: "Smart Watch", price: 1999, oldPrice: 2799, rating: 4.6, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
      { id: 27, name: "Headphones", price: 1299, oldPrice: 1799, rating: 4.4, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" }
    ]
  },

  "home-living": {
    title: "Home & Living",
    products: [
      { id: 28, name: "Decorative Lamp", price: 999, oldPrice: 1499, rating: 4.5, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500" },
      { id: 29, name: "Home Cushion", price: 499, oldPrice: 799, rating: 4.4, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500" },
      { id: 30, name: "Flower Vase", price: 699, oldPrice: 999, rating: 4.6, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500" }
    ]
  }
};

function CategoryPage({ onAddToCart }) {
  const { categoryName } = useParams();
  const category = categoryProducts[categoryName];

  if (!category) {
    return <h2>Category Not Found</h2>;
  }

  return (
    <div className="category-page">

      <div className="category-heading">
        <p>STYLECART COLLECTION</p>
        <h1>{category.title}</h1>
        <span>Explore our exclusive collection</span>
      </div>

      <div className="category-product-grid">

        {category.products.map((product) => (

          <div className="category-product-card" key={product.id}>

            {/* Clickable Product Image */}
            <Link
              to={`/product/${product.id}`}
              state={{ product: product }}
              className="category-product-link"
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ cursor: "pointer" }}
              />
            </Link>

            <div className="category-product-info">

              {/* Clickable Product Name */}
              <h3>
                <Link
                  to={`/product/${product.id}`}
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
                ⭐ {product.rating} / 5
              </p>

              <div className="product-price">
                <strong>₹{product.price}</strong>
                <del>₹{product.oldPrice}</del>
              </div>

              <button
                className="category-cart-btn"
                onClick={() => {
                  if (onAddToCart) {
                    onAddToCart(product);
                  } else {
                    alert(product.name + " added to cart!");
                  }
                }}
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default CategoryPage;