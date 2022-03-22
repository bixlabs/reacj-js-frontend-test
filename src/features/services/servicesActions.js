import fetchSampleData from "../../app/api/mockApi"
// import { fetchServices } from "../../app/api/fetchServices"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer"
import { FETCH_SERVICES } from "./servicesConstants"

export const loadServices = () => async dispatch => {
    dispatch(asyncActionStart())
    try {
        // const services = await fetchServices()
        const services = await fetchSampleData()
        console.log(services)
        dispatch({ type: FETCH_SERVICES, payload: services })
        dispatch(asyncActionFinish())
    } catch (err) {
        dispatch(asyncActionError(err))
    }
}
