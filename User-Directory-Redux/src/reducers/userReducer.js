import { FETCH_USERS,NEW_USER,DELETE_USER } from '../actions/types'

const initialState = {
    users : [],
    user:{}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            console.log('fetching users',state)
            return {
                ...state,
                users:action.payload
            }
        case NEW_USER:
            console.log('creating new user',state)
            return {
                ...state
            }
        case DELETE_USER:
            console.log('deleting user',state)
            console.log('deleting userID',action.payload)
            return {
                users:state.users.filter(user=>user.id !== action.payload)
            }
        default:
            return state
    }
};

export default userReducer;