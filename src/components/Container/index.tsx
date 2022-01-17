import { ReactNode } from "react";
import { MainContainer } from "./styles";

interface Icontainer {
  children: ReactNode;
}

const Container = ({ children }: Icontainer) => {
  return <MainContainer data-testeid="mainContainer">{children}</MainContainer>;
};
export default Container;
