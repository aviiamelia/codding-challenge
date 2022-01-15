import { ReactNode } from "react";
import { MainContainer } from "./styles";

interface Icontainer {
  children: ReactNode;
}

const Container = ({ children }: Icontainer) => {
  return <MainContainer>{children}</MainContainer>;
};
export default Container;
