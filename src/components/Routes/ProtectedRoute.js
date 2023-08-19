import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import API from '../../../src/components/authService/API'
import { getCurrentUser } from '../redux/features/aurh/authActions'
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const dispatch = useDispatch()

  //get current user
  const getUser = async()=>{
    try {
      const {data} = await API.get("/auth/current-user")
      if(data?.sucess){
        dispatch(getCurrentUser(data))//error dout
      }
    } catch (error) {
      localStorage.clear()
      console.log(error)
      
    }
  }
  useEffect(()=>{
    getUser()
  })
  //without using the return statement
  if(localStorage.getItem("token")){
    return children;
  }else{
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute