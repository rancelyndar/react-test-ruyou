import { ADD_COLOR, CHANGE_COLOR, DELETE_COLOR, CHOOSE_COLOR } from "./types"

const initialState = {
    colors: [],
    idToChange: -1
}

export function paletteReducer(state = initialState,action) {
    switch (action.type) {
        case ADD_COLOR:
            {
                if(state.colors.length === 20) {
                    alert('Максимальное число цветов!')
                    return state
                }
                return {
                ...state,
                colors: state.colors.concat([{id:state.colors.length > 0 ? state.colors[state.colors.length-1].id+1 : 1,color:"#ccffff"}]),
                idToChange: action.payload
            }}
        case CHANGE_COLOR:
            return {
                ...state,
                colors: state.colors.map(item => {
                if(item.id === state.idToChange) {
                    return {...item,color:action.payload}
                }
                return item
            })}
        case DELETE_COLOR:
            return {
                ...state,
                colors: state.colors.filter(item => item.id !== action.payload)
            }
        case CHOOSE_COLOR:
            return {
                ...state,
                idToChange: action.payload
            }
        default:
            return state
    }
}