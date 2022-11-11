//STYLES
import styles from "./RightNavbar.module.scss";

//HOOKS
import { useContext, useEffect } from "react";
import moment from "moment";

//CONTEXT
import NavContext from "../../Context/NavContext";

//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Components
import MyProfile from "./Submenus/MyProfile";
import Search from './Submenus/Search'
import Notifications from "./Submenus/Notifications";
import PrivateButton from "./Submenus/PrivateButton";

const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  useEffect(() => {}, []);

  let Date = moment().format("DD MMM,yyyy");
  let weekDay = moment(Date).format('dddd')+', ';

  return (
    <>
      
      <div className={styles.container}>
       
        <div
          className={styles.burger_container}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineMenu />
        </div>

        {/* ACTIONS */}
        
        <div className={styles.actions}>
        <div className="date_pos">
         {weekDay}{Date} 
        </div>
        </div>
        <div className="search_pos">
        <Search />
        </div>
       
        <i className="pi pi-refresh" style={{marginLeft: 30, marginRight: 30}}></i>
        <Notifications />
        <PrivateButton />

        {/* My Profile */}
        <MyProfile />

      </div>
      <div className={styles.burger_top}></div>
    </>
  );
};

export default RightNavbar;
