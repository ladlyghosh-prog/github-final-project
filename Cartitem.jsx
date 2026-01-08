const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // REQUIRED: Function to calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      // Ensure you strip non-numeric characters (like '$') before calculating
      const priceValue = parseFloat(item.cost.replace('$', ''));
      total += item.quantity * priceValue;
    });
    return total;
  };

  return (
    <div className="cart-container">
      {/* REQUIRED: Display the total amount */}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            {/* ... other item details ... */}
            <div>Unit Price: {item.cost}</div>
            <div>Quantity: {item.quantity}</div>
            {/* Optional: Show subtotal for this specific item */}
            <div>Subtotal: ${parseFloat(item.cost.replace('$', '')) * item.quantity}</div>
          </div>
        ))}
      </div>
      
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <button className="get-started-button" onClick={() => alert('Functionality to be added for future reference')}>Checkout</button>
      </div>
    </div>
  );
};
