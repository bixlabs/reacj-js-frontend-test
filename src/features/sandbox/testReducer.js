import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"
import { delay } from "../../app/common/util"

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const initialState = {
    data: 42
}

export function increment(amount) {
    return async function (dispatch) {
        dispatch(asyncActionStart())
        try {
            await delay(1000)
            dispatch({ type: INCREMENT_COUNTER, payload: amount })
            dispatch(asyncActionFinish())
        }
        catch (error) {
            dispatch(asyncActionError())
        }
    }
}

export function decrement(amount) {
    return async function (dispatch) {
        dispatch(asyncActionStart())
        try {
            await delay(1000)
            dispatch({ type: DECREMENT_COUNTER, payload: amount })
            dispatch(asyncActionFinish())
        }
        catch (error) {
            dispatch(asyncActionError())
        }
    }
}


const testReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                data: state.data + payload,
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                data: state.data - payload,
            }
        default:
            return state
    }
}

export default testReducer