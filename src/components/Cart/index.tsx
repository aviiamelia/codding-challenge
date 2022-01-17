import Container from "../Container";
import {
  CartContainer,
  Span,
  SecondaryContainer,
  TotalContainer,
} from "../Products/styles";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useProducts } from "../../Providers/Products";
import { Button } from "../CardProducts/styles";
import { Number } from "../Products/styles";
import CardCart from "../CardCart";
import { useState } from "react";
import { DiscountSelector } from "../Products/styles";
import BuyModal from "../BuyModal";

const MobileCart = () => {
  const { cart, removeFromCart, setCart, products } = useProducts();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const total = cart.reduce((a, b) => a + b.price, 0);
  const [discount, setDiscount] = useState<string>("0");
  const discounts = [109, 25, 99, 75];
  const cleanCart = () => {
    products.map((product) => {
      return (product.quantity = undefined);
    });
    setCart([]);
  };
  const filteredCart = cart.filter(
    (value, index, self) =>
      index === self.findIndex((elem) => elem.id === value.id)
  );
  return (
    <Container>
      <CartContainer>
        <Span>
          <AiOutlineShoppingCart />
        </Span>
        <DiscountSelector onChange={(e) => setDiscount(e.target.value)}>
          <option value="0" onClick={() => setDiscount("0")}></option>
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
          <BuyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            items={cart.length}
            setCart={cleanCart}
          />
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
            Total:
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(total > 0 ? total - parseInt(discount) : 0)}
          </Number>
          <Button onClick={() => setIsOpen(!isOpen)}>BUY</Button>
        </TotalContainer>
      </CartContainer>
    </Container>
  );
};

export default MobileCart;
