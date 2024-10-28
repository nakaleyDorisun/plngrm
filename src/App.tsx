import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BeerList } from "./Components/BeerList/BeerList";
import { Header } from "./Components/Header/Header";
import { TwoRef } from "./Pages/TwoRef/TwoRef";
import { OneRef } from "./Pages/OneRef/OneRef";

function App() {
  return (
    <>
      <Header />
      <BeerList />
      <Routes>
        <Route Component={TwoRef} path="/twostoreref" />
        <Route Component={OneRef} path="/onestoreref" />
      </Routes>
    </>
  );
}

export default App;
