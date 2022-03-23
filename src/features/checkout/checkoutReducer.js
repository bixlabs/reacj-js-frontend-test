import { CREATE_ORDER } from './checkoutConstants'

const initialState = {
    customer: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        state: '',
        zip: ''
    },
    payment: {
        provider: 'PayPal',
        nameOnCard: '',
        creditCardNumber: '',
        expiration: '',
        ccvNumber: '',
    },
    purchase: {
        service: '',
        tier: '',
    }
}

export default function checkoutReducer(state = initialState, { type, payload }) {
    switch (type) {
        case CREATE_ORDER:
            const newOrder = {
                ...state,
                payload
            }
            return newOrder
        default:
            return state
    }
}