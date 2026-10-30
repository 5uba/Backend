
import { useReducer } from "react";

const reducer = (state, action) => {

    switch (action.type) {

        case "INCREMENT":
            return state + action.payload;

        case "DECREMENT":
            return state - action.payload;

        case "RESET":
            return 10;

        default:
            return state;
    }
};

const TaskTwo = () => {

    const [count, dispatch] = useReducer(reducer, 10);

    return (
        <div>

            <h1>Custom Counter - Task 2</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => dispatch({ type: "INCREMENT", payload: 5 })}>
                Add 5
            </button>

            <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
                Add 10
            </button>

            <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
                Subtract 5
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>

        </div>
    );
};

export default TaskTwo;
