import logo from "../../assets/images/logo.svg";
import { HomeStyled } from "./style";

function App() {
  return (
    <HomeStyled>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        Boilerplate PWA React, Typescript and Styled Components
      </header>
    </HomeStyled>
  );
}

export default App;
