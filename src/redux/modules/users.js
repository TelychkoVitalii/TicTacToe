// Constants
export const LOAD_USERS = 'LOAD_USERS';

// Action Creators
export function loadUsers() {
    return (dispatch) => {
        return fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: LOAD_USERS,
                    users: data.results
                });
            })
    }
}

// Initial State Data
const initialState = {
    users: []
};

// Reducers
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS: {
            return Object.assign({}, state, {users: [action.users] || []});
        }
        default:
            return state;
    }
}