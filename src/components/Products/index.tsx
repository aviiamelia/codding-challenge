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
  DiscountSelector,
} from "./styles";
import BuyModal from "../BuyModal";
import CardCart from "../CardCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Button from "../Button";

const ProductsList = () => {
  const { products, addToCart, cart, removeFromCart, setCart } = useProducts();
  const total = cart.reduce((a, b) => a + b.price, 0) | 0;
  const [input, setInput] = useState<string>("");
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [discount, setDiscount] = useState<string[]>([]);
  const totalDiscount = discount.reduce((a, b) => a + parseInt(b), 0) | 0;
  const discounts = [109, 25, 99, 75];
  const filteredCart = cart.filter(
    (value, index, self) =>
      index === self.findIndex((elem) => elem.id === value.id)
  );
  const cleanCart = () => {
    products.map((product) => {
      return (product.quantity = undefined);
    });
    setCart([]);
  };
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
        <ProductsContainer data-testeid="productContainer">
          <BuyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            items={cart.length}
            setCart={cleanCart}
          />
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
          <DiscountSelector
            onChange={(e) => setDiscount([...discount, e.target.value])}
          >
            <option value="0"></option>
            {discounts.map((element, index) => (
              <option key={index} value={element.toString()}>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(element)}
              </option>
            ))}
          </DiscountSelector>
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
            <Number>
              Raw Total:
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </Number>
            <Number>
              Total discount:
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(totalDiscount)}
            </Number>
            <Number>
              Total payable:
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total > 0 ? total - totalDiscount : 0)}
            </Number>
            <Button
              text="Buy"
              disabled={cart.length > 0 ? false : true}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </TotalContainer>
        </CartContainer>
      )}
    </Container>
  );
};
export default ProductsList;
