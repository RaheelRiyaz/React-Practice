import { Provider } from "react-redux";
import { TodoStore } from "./store/TodoStore";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <Provider store={TodoStore}>
      <Navbar />
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
