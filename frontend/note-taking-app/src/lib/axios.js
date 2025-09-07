import axios from "axios";

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://mern-stack-note-taking-app-backend.vercel.app/api'
    : 'http://localhost:3000/api'
})
export default api;
// https://mern-stack-note-taking-app-backend.vercel.app/