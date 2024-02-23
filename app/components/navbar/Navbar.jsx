"use client"

import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'
import { GoMoon, GoSun } from 'react-icons/go'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from "react";

import styles from './navbar.module.css'



const data = [
    { id: 1, link: "/", caption: "Home" },
    { id: 2, link: "/about", caption: "About" },
    { id: 1, link: "/services", caption: "Services" },
    { id: 1, link: "/portfolio", caption: "Portfolio" },
    { id: 1, link: "/contact", caption: "Contact" }
]

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() =>{
        if(window.innerWidth > 600){
            setNavOpen(true);
        }
    })

    const closeNavHandler = () => {
        if(window.innerWidth <= 600){
            setNavOpen(false);
        }
    }


    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.navLogo} onClick={closeNavHandler}>Julio</Link>

                {navOpen && <ul className={styles.navItems}>
                    {
                        data.map(({ id, link, caption }) => <li key={id}>
                            <Link href={link} onClick={closeNavHandler} className={pathname === link ? "active" : ""}>{caption}</Link>
                        </li>)
                    }
                </ul>}

                <div className={styles.navBtns}>
                    <button className={styles.themeBtn}> <GoMoon /> </button>
                    <button className={styles.navBtn} onClick={() => setNavOpen(!navOpen)}>{navOpen ? <FaBars/> : <FaBars />}</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar