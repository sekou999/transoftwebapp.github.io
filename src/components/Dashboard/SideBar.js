import React from "react";
import styles from "./Sidebar.module.css";

function SideBar() {
  return (
        <nav className={styles.sidenav}>
        <div className={styles.sidenavMenu}>
        <div className={styles.nav}>
            <div className={styles.menuHeading}>Core</div>
            <a className={styles.navLink} href="#dashboard">
                <i className={`${styles.icon} fas fa-tachometer-alt`}></i> Dashboard
            </a>
            <div className={styles.menuHeading}>Interface</div>
            <a className={`${styles.navLink} ${styles.collapsed}`} href="#!">
                Layouts
            </a>
            {/* More sidebar items as per your structure */}
        </div>
        </div>
    </nav>
  );
}

export default SideBar;

