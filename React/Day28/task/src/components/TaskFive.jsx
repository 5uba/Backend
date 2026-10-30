
import { useReducer, useEffect } from "react";

const initialState = {
    users: [],
    loading: true,
    error: ""
};

const reducer = (state, action) => {

    switch (action.type) {

        case "FETCH_START":
            return {
                ...state,
                loading: true,
                error: ""
            };

        case "FETCH_SUCCESS":
            return {
                users: action.payload,
                loading: false,
                error: ""
            };

        case "FETCH_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

const TaskFive = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        const fetchUsers = async () => {

            dispatch({ type: "FETCH_START" });

            try {

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: data
                });

            } catch (error) {

                dispatch({
                    type: "FETCH_ERROR",
                    payload: error.message
                });

            }
        };

        fetchUsers();

    }, []);

    return (
        <div>

            <h1>Fetch Users</h1>

            {state.loading && <h2>Loading...</h2>}

            {state.error && <h2>{state.error}</h2>}

            {state.users.map((user) => (

                <div key={user.id}>

                    <h3>Name: {user.name}</h3>

                    <p>Email: {user.email}</p>

                    <hr />

                </div>

            ))}

        </div>
    );
};

export default TaskFive;
