import React, { useState } from 'react';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app">
      {/* 1. Use the EXACT required company name */}
      <h1>Welcome to Paradise Nursery</h1>
      
      <p>Your one-stop shop for beautiful indoor plants.</p>

      {/* 2. Add the onClick functionality to the button */}
      <button onClick={handleGetStartedClick}>
        Get Started
      </button>

      {/* Logic to show product list when showProductList is true */}
      {showProductList && (
        <div className="product-list">
          {/* Your product list component goes here */}
        </div>
      )}
    </div>
  );
}

export default App;
