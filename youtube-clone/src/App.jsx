// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Container from "./pages/Container";
import "./App.css";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Container />
    </Provider>
  );
}

export default App;
