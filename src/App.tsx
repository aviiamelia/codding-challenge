import GlobalStyle from "./styles/global";
import ProductsList from "./components/Products";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductsList />
    </>
  );
}

export default App;
