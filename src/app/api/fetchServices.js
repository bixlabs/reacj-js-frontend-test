import axios from "axios"

export const fetchServices = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}