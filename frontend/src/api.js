const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
}

export async function getCart() {
  const res = await fetch(`${API_BASE}/api/cart`);
  return res.json();
}

export async function addToCart(productId, qty=1) {
  const res = await fetch(`${API_BASE}/api/cart`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ productId, qty })
  });
  return res.json();
}

export async function updateCartItem(id, qty) {
  const res = await fetch(`${API_BASE}/api/cart/${id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ qty })
  });
  return res.json();
}

export async function removeCartItem(id) {
  const res = await fetch(`${API_BASE}/api/cart/${id}`, { method: 'DELETE' });
  return res.json();
}

export async function checkout(cartItems, customer) {
  const res = await fetch(`${API_BASE}/api/checkout`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ cartItems, customer })
  });
  return res.json();
}
