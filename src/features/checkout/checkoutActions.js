import { placeOrder } from "../../app/api/placeOrder"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"
import toast from "react-hot-toast";

export const createOrder = (order) => async dispatch => {
    dispatch(asyncActionStart())
    try {
        await placeOrder(order)
        toast.success('Order successfully created');
        dispatch(asyncActionFinish())
    } catch (err) {
        toast.error('An error occurred while creating order');
        dispatch(asyncActionError(err))
    }
}
