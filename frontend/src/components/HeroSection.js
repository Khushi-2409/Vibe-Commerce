import React from "react";

export default function HeroSection({ onSearch, searchQuery }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Shop the Latest Electronics</h1>
        <p>Best prices, fast delivery, trusted quality.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for gadgets..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
          <button onClick={() => onSearch(searchQuery)}>Search</button>
        </div>
      </div>
    </div>
  );
}
