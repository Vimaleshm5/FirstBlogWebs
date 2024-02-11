import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    authService.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login(userdata))
        } else {
          dispatch(logout())
        }
      }).catch((error) => {
        console.log("failed getCurrent User:-", error)
      })
      .finally(() => {
        setLoding(false)
      }, [])



  })


  return !loading ? (<div>
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>

  </div >) : null

}

export default App
