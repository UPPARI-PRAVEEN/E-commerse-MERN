import axios from "axios";

const API = axios.create({baseURL: process.env.REACT_APP_BASEURL});

API.interceptors.request.use((req)=>{
  if(localStorage.getItem("token")){
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  }
  //An interceptor is a function that gets called before a request is sent. In this case, the interceptor is used to modify the request's headers. If there's a token stored in the localStorage, it adds an "Authorization" header with the token in the format "Bearer <token>". This header is commonly used for authentication with APIs that support Bearer token authentication.
  return req;
})
export default API