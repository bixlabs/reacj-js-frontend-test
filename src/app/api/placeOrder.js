import axios from "axios"

export const placeOrder = async (order) => {
    return await axios.post("http://localhost:3000/v1/orders", order)
}
