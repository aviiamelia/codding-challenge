import { HeaderContainer, CardHome, Number, CardCart } from "./styles";
import { AiTwotoneHome, AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useProducts } from "../../Providers/Products";
import { useState, useEffect } from "react";

const Header = () => {
  const { cart } = useProducts();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const history = useHistory();
  return (
    <HeaderContainer>
      <CardHome onClick={() => history.push("/")}>
        <AiTwotoneHome />
      </CardHome>
      {width < breakpoint ? (
        <CardCart onClick={() => history.push("/cart")}>
          <AiOutlineShoppingCart />
          <Number>{cart.length}</Number>
        </CardCart>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
