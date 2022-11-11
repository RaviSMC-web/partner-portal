//STYLES
import styles from "./Navbar.module.scss";
import "primeicons/primeicons.css";

//CONTEXT
import { useContext } from "react";
import NavContext from "../../Context/NavContext";

//REACT ROUTER
import { NavLink } from "react-router-dom";

//ICONS
import DashboardIcon from "@mui/icons-material/Dashboard";
import AodIcon from "@mui/icons-material/Aod";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AppShortcutRoundedIcon from "@mui/icons-material/AppShortcutRounded";
import DevicesOtherRoundedIcon from "@mui/icons-material/DevicesOtherRounded";
import Stox from "../../pics/stoxkart_old_logo.png";

const NavUrl = ({ url, icon, description }) => {
  const { nav, setNav } = useContext(NavContext);
  const checkWindowSize = () => {
    if (window.innerWidth < 1024) setNav(!nav);
  };

  return (
    <li className={styles.li_navlink}>
      <NavLink
        to={`${url}`}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
        onClick={() => checkWindowSize()}
      >
        {icon}
        <span className={styles.description}>{description}</span>
      </NavLink>
    </li>
  );
};

const Navbar = ({ msg }) => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      <nav className={nav ? undefined : undefined}>
        <div className={styles.logo}>
          <img
            src={Stox}
            alt="logo"
            className={styles.logo_icon}
            style={{ width: "85%" }}
          />
          {/* <FaTimes
            className={styles.mobile_cancel_icon}
            onClick={() => {
              setNav(!nav);
            }}
          /> */}
        </div>

        {/* MENU */}
        <ul className={styles.menu_container}>
          <NavUrl
            url="/main"
            icon={
              <>
                <DashboardIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>Dashboard</span>
              </>
            }
          />

          <NavUrl
            url="/360view"
            icon={
              <>
                <AodIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>360 View</span>
              </>
            }
          />

          <NavUrl
            // url="/"
            icon={
              <>
                <TrendingUpIcon />
                <span style={{ margin: "0px 8px" }}>Sales</span>
              </>
            }
          />

          <NavUrl
            // url="/"
            icon={
              <>
                <AssignmentIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>Report</span>
              </>
            }
          />

          <NavUrl
            // url="/"
            icon={
              <>
                <AppShortcutRoundedIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>IPO</span>
              </>
            }
          />

          <NavUrl
            // url="/"
            icon={
              <>
                <AppShortcutRoundedIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>Marketing</span>
              </>
            }
          />

          <NavUrl
            // url="/"
            icon={
              <>
                <AppShortcutRoundedIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>
                  Application Link
                </span>
              </>
            }
          />

          <NavUrl
            // url="/"
            icon={
              <>
                <DevicesOtherRoundedIcon />
                <span style={{ margin: "0px 10px 0px 10px" }}>Others</span>
              </>
            }
          />
        </ul>
      </nav>

      <div
        className={nav ? styles.mobile_nav_background_active : undefined}
        onClick={() => {
          setNav(!nav);
        }}
      ></div>
    </div>
  );
};

export default Navbar;
