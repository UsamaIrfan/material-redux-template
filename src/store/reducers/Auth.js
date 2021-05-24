const INITIAL_STATE = {
    user: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "SET_USER":
            console.log(action)
            return ({
                ...state,
                user: action.user
            })
        default:
            return state
    }
}