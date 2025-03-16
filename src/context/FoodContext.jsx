import { createContext, useState } from "react";

import { product } from "../assets/assets";

export const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {

  const [products, setProducts] = useState(product);

  return (
    <FoodContext.Provider value={{ products }}>
      {children}
    </FoodContext.Provider>
  )
};

export default FoodContextProvider;