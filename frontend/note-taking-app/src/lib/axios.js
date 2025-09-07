import axios from "axios";
const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://mern-stack-note-taking-app-git-43a35a-fatimas-projects-db19abf8.vercel.app/'
    : 'http://localhost:3000/api',
})
export default api;