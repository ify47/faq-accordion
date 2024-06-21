import "./styles/style.scss";
import background from "./assets/images/background-pattern-desktop.svg";
import { MainSection } from "./components/MainSection";

function App() {
  return (
    <>
      <img className="bgdesktop" src={background} alt="Background Desktop" />
      <MainSection />
    </>
  );
}

export default App;
