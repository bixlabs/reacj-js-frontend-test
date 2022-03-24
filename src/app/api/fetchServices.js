import axios from "axios"

export const fetchServices = async () => {
    return await axios.get("http://localhost:3000/v1/services")
}
