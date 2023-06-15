import { Todo } from "./model";
import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const onHandleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onHandleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onHandleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="single__todo" onSubmit={(e) => onHandleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="single__todo--input"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="single__todo--text">{todo.todo}</s>
      ) : (
        <span className="single__todo--text">{todo.todo}</span>
      )}
      <div className="icons__container">
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <BsPencilSquare />
        </span>
        <span onClick={() => onHandleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span onClick={() => onHandleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
