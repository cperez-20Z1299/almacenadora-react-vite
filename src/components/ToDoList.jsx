import Todo from "./Todo";
// RECIBE FUNCIONES
export const ToDoList = ({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-right display-7">Lista de Tareas</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          Actualmente no hay tareas en la lista. Agregalas desde el formulario.
        </div>
      ) : (
        todos.map((todoTarea) => (
          <Todo
            todo={todoTarea}
            key={todoTarea.id}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};
