import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Nav />
      <Card />
      < Footer />
    </ThemeContextProvider>
  );
}

export default App;
