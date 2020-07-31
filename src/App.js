import React, { } from "react";
import "./App.css";
import CountryProvider from "./componentes/CountryProvider";
import Container from "./componentes/Container";

function App() {
  return (
    <>
    <CountryProvider>
    <Container/>
    </CountryProvider>
    </>
  );
}

export default App;
