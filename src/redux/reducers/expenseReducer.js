import ActionsTypes from "../constants/expenseTypes"

const initialState = {
    expenses: []
}

export default (state=initialState, action) => {
    if (action.type === ActionsTypes.ADD_EXPENSE ) {
        return {
            ...state,
            expenses: [...state.expenses, action.payload]
        }
    } else {
        return state
    }
}