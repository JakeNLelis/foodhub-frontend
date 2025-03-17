import React from "react";
import { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import "./CartTotal.css"; 

function CartTotal() {
  const { currency, getCartAmmount, delivery_fee } = useContext(FoodContext);
  return (
    <div>
      <div className="cart-total-container">
        <div className="cart-title">
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-details">
          <div className="cart-row">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartAmmount()}
            </p>
          </div>
          <hr className="cart-divider" />
          <div className="cart-row">
            <p>Shipping fee</p>
            <p>
              {currency}
              {delivery_fee}
            </p>
          </div>
          <div className="cart-row cart-total">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmmount() == 0 ? 0 : getCartAmmount() + delivery_fee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
