export function TodoItem({ id, value, done, toggleTodo, deleteTodo }) {

    return (
        <li key={id}>
            <label>
                <input type="checkbox" checked={done}
                    onChange={e => toggleTodo(id, e.target.checked)}
                ></input>
                {value}
            </label>
            <button className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            >Delete</button>
        </li>
    )
}