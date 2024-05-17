import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Login />
        <Profile />
      </DataProvider>
    </>
  );
}

export default App;
