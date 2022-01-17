import { ButtonContainer } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface IButton {
  disabled: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  text: string;
  isOpen: boolean;
}

const Button = ({ disabled, setIsOpen, text, isOpen }: IButton) => {
  return (
    <ButtonContainer disabled={disabled} onClick={() => setIsOpen(!isOpen)}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
