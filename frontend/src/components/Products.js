import React, { useState } from "react";

export default function Products({ products, onAdd }) {
  const [addedProductId, setAddedProductId] = useState(null);

  async function handleAdd(pid) {
    await onAdd(pid);
    setAddedProductId(pid);
    setTimeout(() => setAddedProductId(null), 2000); // reset after 2 sec
  }

  return (
    <section className="products-section">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="card-bottom">
              <span className="price">₹{p.price}</span>
              {addedProductId === p._id ? (
                <button className="added-btn" disabled>
                  Added ✅
                </button>
              ) : (
                <button onClick={() => handleAdd(p._id)}>Add to Cart</button>
              )}
            </div>
            {addedProductId === p._id && (
              <p className="added-msg">Your product has been added!</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
