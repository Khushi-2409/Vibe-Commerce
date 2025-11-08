import React, { useState } from "react";

export default function CartPage({ data, onQty, onRemove, onCheckout }) {
  const [customer, setCustomer] = useState({ name: "", email: "" });
  const [receipt, setReceipt] = useState(null);

  const handleCheckout = async () => {
    if (!customer.name || !customer.email) {
      alert("Please enter your name and email before checkout.");
      return;
    }

    const res = await onCheckout(customer);
    setReceipt(res); // Expect receipt data from backend
  };

  // ✅ Defensive check — ensures no crash if data is undefined
  const items = data?.items || [];
  const total = data?.total || 0;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {/* ✅ Safely handle all cases */}
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {data.items.map((it) => {
              const product = it.product || {}; // fallback if product is null
              return (
                <li key={it._id} className="cart-item">
                  <img
                    src={product.image || "/placeholder.jpg"} // use fallback image
                    alt={product.name || "Unknown product"}
                    className="cart-img"
                  />
                  <div className="cart-info">
                    <h4>{product.name || "Product unavailable"}</h4>
                    <p>₹{product.price || 0}</p>
                  </div>
                  <div className="cart-actions">
                    <input
                      type="number"
                      value={it.qty}
                      min="1"
                      onChange={(e) => onQty(it._id, parseInt(e.target.value))}
                    />
                    <button onClick={() => onRemove(it._id)}>Remove</button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="checkout-form">
            <h3>Customer Details</h3>
            <input
              type="text"
              placeholder="Enter your name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
            />

            <div className="cart-summary">
              <h3>Total: ₹{total}</h3>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {/* ✅ Popup confirmation (unchanged) */}
      {receipt && (
        <div className="order-popup">
          <div className="order-popup-content">
            <h2>🎉 Order Confirmed!</h2>
            <p>
              <strong>Order ID:</strong> {receipt.orderId}
            </p>
            <p>
              <strong>Name:</strong> {receipt.name}
            </p>
            <p>
              <strong>Email:</strong> {receipt.email}
            </p>
            <p>
              <strong>Total:</strong> ₹{receipt.total}
            </p>
            <p>Thank you for shopping with us 💚</p>
            <button onClick={() => setReceipt(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
