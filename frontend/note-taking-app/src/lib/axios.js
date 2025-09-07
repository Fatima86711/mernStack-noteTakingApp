import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})
// https://grocery-store-mu-virid.vercel.app/
export default api;
// process.env.NODE_ENV === 'production' 
//     ? 'https://your-backend.vercel.app/api'
//     : 'http://localhost:3000/api',