import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import RightNavbar from "../RightNavbar/RightNavbar";
import NavContext from "../../Context/NavContext";
import Tab360View from "./360View";
import { useNavigate } from "react-router-dom";


function MainFile() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };
  const [isAuth, setAuth] = useState(sessionStorage.getItem("userCode"))
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuth) {
      navigate("/360view");
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
            <Tab360View />
          }
        />
      </NavContext.Provider>
    </div>
  );
}

export default MainFile;
