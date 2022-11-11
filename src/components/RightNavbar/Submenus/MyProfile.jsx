//REACT ROUTER
import { useNavigate } from "react-router-dom";

//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar } from "primereact/avatar";
// import { useNavigate } from "react-router-dom";

const MyProfile = () => {

  const navigate = useNavigate();
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });

  const logout = () => {
    sessionStorage.clear();
    navigate('/')
  }
  
  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => {
        setisProfileOpen(!isProfileOpen);
      }}
    >
      <Avatar icon="pi pi-user" className="mr-2" size="medium" shape="circle" />

      {/* NAME */}
      <div className={styles.name}>
        {/* <span>{auth}</span> */}
        <MdKeyboardArrowDown />
      </div>

      {/* AVATAR/SETTINGS SUBMENU */}
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
      >
        <div className={styles.info}>
          <span className={styles.name}>BD35352</span>
          <span className={styles.role}>User</span>
        </div>
        <div className={styles.settings}>
          <span style={{ color: "red", cursor: "pointer" }} onClick={logout}>
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
