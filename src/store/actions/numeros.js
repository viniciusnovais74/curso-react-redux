//Action Creator
export function alterarNumberMin(newNumber){

    return{
        type: 'NUM_MIN_ALTER',
        payload: newNumber
    }

}