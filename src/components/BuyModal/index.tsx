import { ModalContainer, Title, Button } from "./styles";
import { SetStateAction, Dispatch } from "react";

interface IbuyModal {
  items: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setCart: () => void;
}

const BuyModal = ({ items, isOpen, setIsOpen, setCart }: IbuyModal) => {
  return isOpen ? (
    <ModalContainer>
      <Title>You have Bought {items} items</Title>
      <Button onClick={() => setIsOpen(!isOpen)}>Keep shopping!!</Button>
      <Button onClick={setCart}>Finish purchase!!</Button>
    </ModalContainer>
  ) : (
    <></>
  );
};

export default BuyModal;
