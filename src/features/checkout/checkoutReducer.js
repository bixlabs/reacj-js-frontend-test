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
    return state
}