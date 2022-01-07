import { createStore, combineReducers } from 'redux'
import numberReducer from './reducers/numeros'
const reducers = combineReducers({

    numeros: numberReducer,
    
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig