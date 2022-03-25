import axios from "axios"

export const placeOrder = async (order) => {
    return await axios.post(process.env.REACT_APP_BACKEND_URL + "/orders", order)
}
