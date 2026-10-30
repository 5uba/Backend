
import { useReducer, useEffect } from "react";

const initialState = {
    users: [],
    search: "",
    loading: true
};

const reducer = (state, action) => {

    switch (action.type) {

        case "FETCH_SUCCESS":
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case "SEARCH":
            return {
                ...state,
                search: action.payload
            };

        default:
            return state;
    }
};

const TaskSix = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        const fetchUsers = async () => {

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
                console.log(error.message);
            }
        };

        fetchUsers();

    }, []);

    const filteredUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(state.search.toLowerCase())
    );

    return (
        <div>

            <h1>Search Users - Task 6</h1>

            <input
                type="text"
                placeholder="Search User Name"
                value={state.search}
                onChange={(e) =>
                    dispatch({
                        type: "SEARCH",
                        payload: e.target.value
                    })
                }
            />

            {state.loading ? (

                <h2>Loading...</h2>

            ) : filteredUsers.length > 0 ? (

                filteredUsers.map((user) => (

                    <div key={user.id}>

                        <h3>Name: {user.name}</h3>

                        <p>Email: {user.email}</p>


                    </div>

                ))

            ) : (

                <h2>No Users Found</h2>

            )}

        </div>
    );
};

export default TaskSix;
