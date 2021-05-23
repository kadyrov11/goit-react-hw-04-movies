import {NavLink} from "react-router-dom";

import styles from "./NavbarMenuItem.module.css";

const NavbarMenuItem = ({to, title}) => {
    return (
        <li className={styles.navbarMenuItem}>
            <NavLink exact to={to} className={styles.navbarMenuLink} activeClassName={styles.active}>{title}</NavLink>
        </li>
    )
}

export default NavbarMenuItem;