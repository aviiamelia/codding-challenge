import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../service";

interface IproductsList {
  children: ReactNode;
}
interface iproducts {
  id: string;
  name: string;
  price: number;
  quantity?: number | undefined;
}

interface IproductsContext {
  products: iproducts[];
  cart: iproducts[];
  addToCart: (product: iproducts) => void;
  removeFromCart: (product: iproducts) => void;
}

const ProductsContext = createContext({} as IproductsContext);

export const ProductsProvider = ({ children }: IproductsList) => {
  const [products, setProducts] = useState<iproducts[]>([]);
  const [cart, setCart] = useState<iproducts[]>([]);
  console.log(products);

  const getProducts = useCallback(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);
  const addToCart = (product: iproducts) => {
    setCart([...cart, product]);
    if (product.quantity === undefined) {
      product.quantity = 1;
    } else {
      product.quantity += 1;
    }
  };

  const removeFromCart = (product: iproducts) => {
    const newList = cart.filter((item) => item.id !== product.id);
    setCart(newList);
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <ProductsContext.Provider
      value={{ products, cart, addToCart, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
