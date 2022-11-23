import {combineReducers, applyMiddleware, createStore} from 'redux'
import expenseReducer from './reducers/expenseReducer'
import reduxThunk from 'redux-thunk'

const appReducer = combineReducers({
    expenseReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;