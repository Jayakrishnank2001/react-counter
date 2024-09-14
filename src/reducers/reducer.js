
function stateReducer(state, action) {
    switch (action) {
        case 'Increment':
            return {
                ...state,
                value: state.value + 1
            }
        case 'Decrement':
            return {
                ...state,
                value: state.value - 1
            }
        case 'green':
            return {
                ...state,
                color: 'green'
            }
        case 'blue':
            return {
                ...state,
                color: 'blue'
            }
        default:
            break
    }
}

export default stateReducer