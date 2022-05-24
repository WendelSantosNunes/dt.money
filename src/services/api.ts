import axios from "axios";

export const api = axios.create({
   baseURL:'http://localhost:3000/api/'  // Qual a parte da url que está se repetido
})