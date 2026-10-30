
import { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
    course: ""
};

const reducer = (state, action) => {

    switch (action.type) {

        case "UPDATE":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
};

const TaskFour = () => {

    const [student, dispatch] = useReducer(reducer, initialState);

    return (
        <div>

            <h1>Student Registration Form - Task 4</h1>

            <input
                type="text"
                placeholder="Enter Name"
                value={student.name}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE",
                        payload: {
                            name: "name",
                            value: e.target.value
                        }
                    })
                }
            />

            <br /><br />

            <input
                type="email"
                placeholder="Enter Email"
                value={student.email}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE",
                        payload: {
                            name: "email",
                            value: e.target.value
                        }
                    })
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Course"
                value={student.course}
                onChange={(e) =>
                    dispatch({
                        type: "UPDATE",
                        payload: {
                            name: "course",
                            value: e.target.value
                        }
                    })
                }
            />

            <br /><br />

            <button onClick={() => dispatch({ type: "RESET" })}>
                Reset
            </button>

            <h2>Student Details</h2>

            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>

        </div>
    );
};

export default TaskFour;
