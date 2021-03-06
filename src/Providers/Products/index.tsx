import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { api } from "../../services";
import { backupProducts } from "../../services/backup";

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
  setCart: Dispatch<SetStateAction<iproducts[]>>;
}

const ProductsContext = createContext({} as IproductsContext);

export const ProductsProvider = ({ children }: IproductsList) => {
  const [products, setProducts] = useState<iproducts[]>([]);
  const [cart, setCart] = useState<iproducts[]>([]);

  const getProducts = useCallback(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((_) => {
        setProducts(backupProducts);
      });
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
      value={{ products, cart, addToCart, removeFromCart, setCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
