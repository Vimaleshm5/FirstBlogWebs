import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout())).catch((error) =>{ console.log("logout failed :-", error)})
  }

  return (
    <button onClick={logoutHandler}>logout</button>
  )
}

export default LogoutBtn