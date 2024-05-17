import { Provider } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import Notes from "./components/Notes";
import { store } from "./store/NoteStore";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Input />
      <Notes />
    </Provider>
  );
}

export default App;
