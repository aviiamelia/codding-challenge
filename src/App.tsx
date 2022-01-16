import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./Routes";
import { AppContainer } from "./components/Container/styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Routes />
    </AppContainer>
  );
}

export default App;
