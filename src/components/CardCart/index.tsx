import { CardCartContainer, Text, Span, SpanNumber } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";

interface iproduct {
  id?: string;
  name: string;
  price: number;
  quantity?: number;
  onClick: () => void;
}

const CardCart = ({ name, price, quantity, onClick }: iproduct) => {
  return (
    <CardCartContainer data-testid="Cart-card-element">
      <Text>{name}</Text>
      <SpanNumber>{quantity}</SpanNumber>
      <Text>
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </Text>
      <Span onClick={onClick}>
        <AiFillCloseCircle />
      </Span>
    </CardCartContainer>
  );
};

export default CardCart;
