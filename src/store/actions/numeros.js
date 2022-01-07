import {
    NUM_MAX_ALTER,
    NUM_MIN_ALTER
} from './actionTypes'
//Action Creator
export function alterarNumberMin(newNumber) {

    return {
        type: NUM_MIN_ALTER,
        payload: newNumber
    }

}
export function alterarNumberMax(newNumber) {

    return {
        type: NUM_MAX_ALTER,
        payload: newNumber
    }

}