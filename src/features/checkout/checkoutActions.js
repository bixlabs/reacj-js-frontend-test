import { CREATE_ORDER } from './checkoutConstants'

export default function createOrder(order) {
    return {
        type: CREATE_ORDER,
        payload: order
    }
}