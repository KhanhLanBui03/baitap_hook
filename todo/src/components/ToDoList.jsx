import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, useRef, useMemo, useReducer } from "react";

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload);
        case 'SET':
            return action.payload;
        default:
            return state;
    }
};

function ToDoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            dispatch({ type: 'SET', payload: storedTodos });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = useMemo(() => {
        return {
            incomplete: todos.filter(todo => !todo.completed),
            completed: todos.filter(todo => todo.completed)
        };
    }, [todos]);

    const handleAddTodo = () => {
        if (!inputValue.trim()) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };
        dispatch({ type: 'ADD', payload: newTodo });
        setInputValue('');
        inputRef.current.focus();
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE', payload: id });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Todo List</h1>
            <div className="input-group mb-3">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a new task"
                />
                <button className="btn btn-primary" onClick={handleAddTodo}>Add</button>
            </div>
            <h2 className="text-danger">Incomplete Tasks</h2>
            <ul className="list-group mb-3">
                {filteredTodos.incomplete.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{todo.text}</span>
                        <div>
                            <button className="btn btn-success btn-sm me-2" onClick={() => handleToggleTodo(todo.id)}>Complete</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className="text-success">Completed Tasks</h2>
            <ul className="list-group">
                {filteredTodos.completed.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
                        <div>
                            <button className="btn btn-warning btn-sm me-2" onClick={() => handleToggleTodo(todo.id)}>Undo</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;