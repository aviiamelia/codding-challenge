import { ModalContainer, Title, Button } from "./styles";
import { SetStateAction, Dispatch } from "react";
interface iproducts {
  id: string;
  name: string;
  price: number;
  quantity?: number | undefined;
}
interface IbuyModal {
  items: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setCart: Dispatch<SetStateAction<iproducts[]>>;
}

const BuyModal = ({ items, isOpen, setIsOpen, setCart }: IbuyModal) => {
  return isOpen ? (
    <ModalContainer>
      <Title>You have Bought {items}</Title>
      <Button onClick={() => setIsOpen(!isOpen)}>Keep shopping!!</Button>
      <Button onClick={() => setCart([])}>Finish purchase!!</Button>
    </ModalContainer>
  ) : (
    <></>
  );
};

export default BuyModal;
