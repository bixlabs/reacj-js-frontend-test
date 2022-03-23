import { fetchServices } from "../../app/api/fetchServices"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"
import { FETCH_SERVICES } from "./servicesConstants"

export const loadServices = () => async dispatch => {
    dispatch(asyncActionStart())
    try {
        const resp = await fetchServices()
        const services = resp.data
        dispatch({ type: FETCH_SERVICES, payload: services })
        dispatch(asyncActionFinish())
    } catch (err) {
        dispatch(asyncActionError(err))
    }
}
