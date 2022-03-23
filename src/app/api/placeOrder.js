import axios from "axios"

export const placeOrder = async (order) => {
    return await axios.post("http://localhost:8080/order", order)
}