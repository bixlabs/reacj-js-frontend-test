import { sampleData } from "../../app/api/sampleData";

const initialState = {
    services: sampleData
}

export default function servicesReducer(state = initialState, { type, payload }) {
    return state
}