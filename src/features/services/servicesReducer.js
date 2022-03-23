import { FETCH_SERVICES } from "./servicesConstants";

const initialState = {
    services: []
}

export default function servicesReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_SERVICES:
            return {
                ...state,
                services: payload
            }
        default:
            return state
    }
}