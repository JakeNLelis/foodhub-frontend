import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { product } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {

  const currency = "₱";
  const delivery_fee = 12;

  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState(product);

  const navigate = useNavigate();
  const addToCart = async (itemsId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemsId] = (updatedCart[itemsId] || 0) + 1;
    setCartItems(updatedCart);

    toast.success("Item added to cart");
  }

  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  }

  const updateQuantity = async (itemsId, quantity) => {
    let cartData = { ...cartItems };
    cartData[itemsId] = quantity;
    setCartItems(cartData);
  }

  const getCartAmmount = () => {
    return Object.entries(cartItems).reduce((totalAmount, [productId, quantity]) => {
      const itemInfo = products.find((product) => product._id === productId);
      return itemInfo ? totalAmount + itemInfo.price * quantity : totalAmount;
    }, 0)
  }

//useEffect(() => {}, []);

  return (
    <FoodContext.Provider value={{ products, cartItems, navigate, currency, addToCart, delivery_fee, getCartCount, updateQuantity, getCartAmmount }}>
      {children}
    </FoodContext.Provider>
  )
};

export default FoodContextProvider;