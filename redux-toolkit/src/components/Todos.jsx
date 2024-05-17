import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";

function Todos() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-black mt-5">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
    </div>
  );
}

export default Todos;
