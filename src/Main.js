import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import NavContext from "./Context/NavContext";
import Dashboard from "./components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";


function Main() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };
  const [isAuth] = useState(sessionStorage.getItem("userCode"))
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuth) {
      navigate("/main");
    } else {
      navigate("/")
    }
  }, [])

  return (
    <div className="App">
      <NavContext.Provider value={value}>
        <Navbar/>
        <Container
          stickyNav={<RightNavbar />}
          content={
            <Dashboard />
          }
        />
      </NavContext.Provider>
    </div>
  );
}

export default Main;
