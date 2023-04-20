import { ToDoList } from "./components/ToDoList"
import TodoForm from "./components/TodoForm";
import { useState } from "react"

const initialTodos = [
  {
    id: 1,
    title: "Tarea 2",
    description: "Descripción",
    name: "Shiro Chan",
    dateStart: "2015/10/15",
    dateEnd: "2015/10/20",
    completed: false,
  },
  {
    id: 2,
    title: "Tarea 1",
    description: "Descripcion",
    name: "Sergio Perez",
    dateStart: "2020/10/10",
    dateEnd: "2021/01/01",
    completed: true,
  },
];

export const Almacenadora = () => {

  const [todos, setTodos] = useState(initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  const todoDelete = (todoId) => {
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const todoToogleCompleted = (todoId) => {
    // MARCAR BOTON TERMINADO
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(changedTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };
    const changedTodos = [newTodo, ...todos];
    setTodos(changedTodos);
  };

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );
    setTodos(changedTodos);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {/* LLAMAR COMPONENTES */}
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-6">
          <ToDoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  )
}