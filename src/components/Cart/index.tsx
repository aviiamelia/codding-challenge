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

const MobileCart = () => {
  const { cart, removeFromCart } = useProducts();
  const total = cart.reduce((a, b) => a + b.price, 0);
  const [discount, setDiscount] = useState<string>("0");
  const discounts = [109, 25, 99, 75];
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
          {discounts.map((element) => (
            <option value={element.toString()}>
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
          <Button>BUY</Button>
          <Number>
            Total:
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(total > 0 ? total - parseInt(discount) : 0)}
          </Number>
        </TotalContainer>
      </CartContainer>
    </Container>
  );
};

export default MobileCart;
