
import { useReducer, useState } from "react";

const reducer = (state, action) => {

    switch (action.type) {

        case "ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    task: action.payload,
                    completed: false
                }
            ];

        case "DELETE":
            return state.filter((todo) => todo.id !== action.payload);

        case "TOGGLE":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
};

const TaskSeven = () => {

    const [todos, dispatch] = useReducer(reducer, []);

    const [task, setTask] = useState("");

    const addTask = () => {

        if (task.trim() === "") {
            return;
        }

        dispatch({
            type: "ADD",
            payload: task
        });

        setTask("");
    };

    return (
        <div>

            <h1>Todo Application</h1>

            <input
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTask}>
                Add Task
            </button>

            <h2>Total Tasks: {todos.length}</h2>

            {todos.map((todo) => (

                <div key={todo.id}>

                    <span
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none"
                        }}
                    >
                        {todo.task}
                    </span>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE",
                                payload: todo.id
                            })
                        }
                    >
                        {todo.completed ? "Pending" : "Completed"}
                    </button>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "DELETE",
                                payload: todo.id
                            })
                        }
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
};

export default TaskSeven;
