import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';
import LoginBox from './LoginBox';

const Login = () => {
  const { login,authState } = useContext(AuthContext)
  console.log(login);
  console.log(authState);
  if (authState) {
    return <Navigate to={"/"}/>
  }
  return (
   <LoginBox/>
  )
}

export default Login
