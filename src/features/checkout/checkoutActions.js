import { placeOrder } from "../../app/api/placeOrder"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"

export const createOrder = (order) => async dispatch => {
    dispatch(asyncActionStart())
    try {
        console.log(order)
        const resp = await placeOrder(order)
        console.log(resp)
        dispatch(asyncActionFinish())
    } catch (err) {
        dispatch(asyncActionError(err))
    }
}