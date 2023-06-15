import "./App.css";
import Heading from "./components/Heading";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { Todo } from "./components/model";
import { useState } from "react";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <Heading title={"Taskify"} />
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
