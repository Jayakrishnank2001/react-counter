const TYPE = {
    CHANGE_VALUE: 'change-value',
    CHANGE_COLOR:'change-color'
}
function stateReducer(state, action) {
    switch (action.type) {
        case TYPE.CHANGE_VALUE:
            return {
                ...state,
                value: state.value + action.payload
            }
        case TYPE.CHANGE_COLOR:
            return {
                ...state,
                color: action.payload
            }
        default:
            return state
    }
}

export default stateReducer

export {
    TYPE
}