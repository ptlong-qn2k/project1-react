import axios from "axios"

const fetchData = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
})



export { fetchData }