// RECIBE FUNCIONES EN ARGUMENTO
const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return (
        <div className='card mt-2'>
            <div className='card-body'>
                <h1 className='card-title text-right'>
                    {todo.title}
                    <button
                        onClick={() => todoToogleCompleted(todo.id)}
                        // TEMPLATE STRING
                        className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ml-2`}>
                        {/* CAMBIA SI ESTA LA TAREA COMPLETA */}
                        {todo.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h1>
                <p className='card-text text-right'>
                    <strong>Descripcion:</strong><br />
                    {todo.description}
                </p>
                <p className='card-text text-right'>
                    <strong>Creado por:</strong><br />
                    {todo.name}
                </p>
                <p className='card-text text-right'>
                    <strong>Fecha inicio:</strong> <br />
                    {todo.dateStart}
                </p>
                <p className='card-text text-right'>
                    <strong>Fecha final:</strong> <br />
                    {todo.dateEnd}
                </p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button
                        // CONVERTIR A FUNCION FLECHA
                        onClick={() => setTodoEdit(todo)}
                        className='btn btn-sm btn-outline-primary mr-2'>
                        Editar
                    </button>
                    {/* ELIMINA TO DO */}
                    <button onClick={() => todoDelete(todo.id)} className='btn btn-sm btn-outline-danger'>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;