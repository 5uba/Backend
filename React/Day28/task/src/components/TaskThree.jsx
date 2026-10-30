
import { useReducer } from "react";

const reducer = (state, action) => {

    switch (action.type) {

        case "SHOW":
            return true;

        case "HIDE":
            return false;

        default:
            return state;
    }
};

const TaskThree = () => {

    const [showPassword, dispatch] = useReducer(reducer, false);

    return (
        <div>

            <h1>Show / Hide Password - Task 3</h1>

            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
            />

            {showPassword ? (

                <button onClick={() => dispatch({ type: "HIDE" })}>
                    Hide Password
                </button>

            ) : (

                <button onClick={() => dispatch({ type: "SHOW" })}>
                    Show Password
                </button>

            )}

        </div>
    );
};

export default TaskThree;
