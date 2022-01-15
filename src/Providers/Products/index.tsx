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
}

interface IproductsContext {
  products: iproducts[];
  cart: iproducts[];
  addToCart: (product: iproducts) => void;
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
  };
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <ProductsContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
