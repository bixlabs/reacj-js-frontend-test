import axios from "axios"

export const fetchServices = async () => {
    return await axios.get("http://localhost:8080/service")
}