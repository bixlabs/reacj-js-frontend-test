import { CREATE_ORDER } from './checkoutConstants'

const initialState = {
    order: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        state: '',
        zip: '',
        payment: '',
        nameOnCard: '',
        creditCardNumber: '',
        expiration: '',
        ccvNumber: '',
    }
}

export default function checkoutReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_ORDER:
            const newOrder = {
                ...state,
                payload
            }
            console.log(newOrder)
            return newOrder
        default:
            return state
    }
}