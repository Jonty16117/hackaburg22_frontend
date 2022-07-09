import React from 'react'
import styles from './SideNavigation.module.css';
import { Link, useLocation } from "react-router-dom";

function SideNavigation() {
    const location = useLocation();
    console.log(1, location.pathname);
    const getStyle = (currOption) => location.pathname === currOption ? "option-selected" : "option"

    return (
        <div className={styles["root"]}>
            <div className={styles["t1"]}>
                SMART OFFICE
            </div>
            <div className={styles["t2"]}>
                DATA
            </div>
            <Link className={styles[getStyle("/")]} to="/" role='button'>General Stats</Link>
            <Link className={styles[getStyle("/roomsInfo")]} to="/roomsInfo" role='button'>Building Usage</Link>
            <Link className={styles[getStyle("/foodInfo")]} to="/foodInfo" role='button'>Food Preferences</Link>
            <Link className={styles[getStyle("/parkingInfo")]} to="/parkingInfo" role='button'>Charging Stations</Link>
        </div>
    )
}

export default SideNavigation