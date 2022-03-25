import axios from "axios"

export const fetchServices = async () => {
    return await axios.get(process.env.REACT_APP_BACKEND_URL + "/services")
}
