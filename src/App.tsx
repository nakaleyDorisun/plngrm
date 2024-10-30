import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BeerList } from "./Components/BeerList/BeerList";
import { Header } from "./Components/Header/Header";
import { TwoRef } from "./Pages/TwoRef/TwoRef";
import { OneRef } from "./Pages/OneRef/OneRef";
import { ThemeContextProvider } from "./context/NightTheme";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <BeerList />
        <Routes>
          <Route Component={TwoRef} path="/twostoreref" />
          <Route Component={OneRef} path="/onestoreref" />
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
