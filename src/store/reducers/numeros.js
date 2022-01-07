import { NUM_MIN_ALTER, NUM_MAX_ALTER } from '../actions/actionTypes'

const estadoInicial = {
    min: 1,
    max: 10
}

export default function (state = estadoInicial, action) {
    switch (action.type) {
        case NUM_MIN_ALTER:
            return {
                ...state,
                min: action.payload
            }

        case NUM_MAX_ALTER:
            return {
                ...state,
                max: action.payload
            }

        default:
            return state
    }
}