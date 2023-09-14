import Axios from "axios";

export const api = Axios.create({
    baseURL: "https://rocketmovies-api-0kvo.onrender.com"
})