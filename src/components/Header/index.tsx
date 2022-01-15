import { HeaderContainer, CardHome } from "./styles";
import { AiTwotoneHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <CardHome onClick={() => history.push("/")}>
        <AiTwotoneHome />
      </CardHome>
    </HeaderContainer>
  );
};

export default Header;
