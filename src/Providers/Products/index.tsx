import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../../service/index";

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
}

const ProductsContext = createContext({} as IproductsContext);

export const ProductsProvider = ({ children }: IproductsList) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getProducts = useCallback(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
