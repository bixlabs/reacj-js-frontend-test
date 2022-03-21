import { CREATE_ORDER } from './checkoutConstants'

export function createOrder(order) {
    return {
        type: CREATE_ORDER,
        payload: order
    }
}