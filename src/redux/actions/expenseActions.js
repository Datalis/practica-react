import ActionsTypes from "../constants/expenseTypes"

export function addExpense(obj ) {
    return  {
        type: ActionsTypes.ADD_EXPENSE,
        payload: obj
    }
}