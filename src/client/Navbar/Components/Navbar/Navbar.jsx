import React from "react";
import shortid from 'shortid'

import NavbarMenuItem from "../NavbarMenuItem";

import styles from "./Navbar.module.css";

import {menuItems} from "./menuItems";

const Navbar = () => {

    const navbarMenuElements = menuItems.map(item => <NavbarMenuItem key={shortid.generate()} {...item} />);

    return (
        <nav className="navbar">
            <div className={styles.container}>
                <div className="navbar-row">
                    <ul className={styles.navbarMenu}>
                        {navbarMenuElements}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;