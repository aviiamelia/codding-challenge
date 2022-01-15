import { CardContainer, Text, Button } from "./styles";

interface iproduct {
  id?: string;
  name: string;
  price: number;
  onClick: () => void;
}

const Card = ({ name, price, onClick }: iproduct) => {
  return (
    <CardContainer>
      <Text>{name}</Text>
      <Text>
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </Text>
      <Button onClick={onClick}>Add</Button>
    </CardContainer>
  );
};

export default Card;
