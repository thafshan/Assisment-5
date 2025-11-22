import React from "react";
import useFetch from "../hooks/useFetch";


export default function Products() {
  const { data, loading, error, refetch } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return (
      <div className="center">
        <div className="loader" /> {/* CSS spinner */}
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        <p>Error: {error}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="products-grid">
      {data.slice(0, 20).map((p) => (
        <div className="card" key={p.id}>
          <img
            src={p.images?.[0] || "https://via.placeholder.com/150"}
            alt={p.title}
            className="product-img"
            loading="lazy"
          />
          <h3 className="title">{p.title}</h3>
          <p className="price">₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}
