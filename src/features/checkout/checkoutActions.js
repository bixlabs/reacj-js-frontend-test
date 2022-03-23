import { placeOrder } from "../../app/api/placeOrder"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"

export const createOrder = (order) => async dispatch => {
    dispatch(asyncActionStart())
    try {
        const postData = {
            customer: {
                firstName: order.firstName,
                lastName: order.lastName,
                email: order.email,
                address: order.address,
                country: order.country,
                state: order.state,
                zip: order.zip,
                payment: order.payment,
                nameOnCard: order.nameOnCard,
                creditCardNumber: order.creditCardNumber,
                expiration: order.expiration,
                ccvNumber: order.ccvNumber,
            },
            purchase: {
                service: 'holis',
                tier: 'chau'
            }
        }
        const resp = await placeOrder(postData)
        console.log(resp)
        dispatch(asyncActionFinish())
    } catch (err) {
        dispatch(asyncActionError(err))
    }
}