import { useProducts } from "../../Providers/Products";
import Container from "../Container";
import Card from "../CardProducts";
import { useEffect, useState } from "react";
import {
  CartContainer,
  Span,
  SecondaryContainer,
  TotalContainer,
  Number,
  InputContainer,
  Input,
  ProductsContainer,
} from "./styles";

import CardCart from "../CardCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { Button } from "../CardProducts/styles";

const ProductsList = () => {
  const { products, addToCart, cart, removeFromCart } = useProducts();
  const total = cart.reduce((a, b) => a + b.price, 0);
  const [input, setInput] = useState<string>("");
  const [width, setWidth] = useState(window.innerWidth);
  console.log(total);
  const filteredCart = cart.filter(
    (value, index, self) =>
      index === self.findIndex((elem) => elem.id === value.id)
  );
  console.log(input);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <Container>
      {width > 800 ? (
        <ProductsContainer>
          {products
            .filter((ele) =>
              ele.name.toLowerCase().includes(input.toLowerCase())
            )
            .map((product) => (
              <Card
                onClick={() => addToCart(product)}
                key={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
        </ProductsContainer>
      ) : (
        products
          .filter((ele) => ele.name.toLowerCase().includes(input.toLowerCase()))
          .map((product) => (
            <Card
              onClick={() => addToCart(product)}
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))
      )}

      {width > 800 && (
        <InputContainer>
          <Input onChange={(e) => setInput(e.target.value)} />
          <Span>
            <BiSearchAlt />
          </Span>
        </InputContainer>
      )}

      {width > 800 && (
        <CartContainer>
          <Span>
            <AiOutlineShoppingCart />
          </Span>
          <SecondaryContainer>
            {filteredCart.map((product, index) => (
              <CardCart
                onClick={() => removeFromCart(product)}
                quantity={product.quantity}
                key={index}
                name={product.name}
                price={product.price}
              />
            ))}
          </SecondaryContainer>
          <TotalContainer>
            <Button>BUY</Button>
            <Number>
              Total:{" "}
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </Number>
          </TotalContainer>
        </CartContainer>
      )}
    </Container>
  );
};
export default ProductsList;
