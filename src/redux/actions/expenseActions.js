import ActionsTypes from "../constants/expenseTypes"

export function addExpense(obj ) {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch({
    //                 type: ActionsTypes.ADD_EXPENSE,
    //                 payload: obj
    //             })
    //     }, 1000)
    // }
   
    return  {
        type: ActionsTypes.ADD_EXPENSE,
        payload: obj
    }
}