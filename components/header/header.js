import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const Header = () => {
    const nav = useRef(null)
    const burger = useRef(null)

    const toggleNav = () => {
        nav.current.classList.toggle("active")
        burger.current.classList.toggle("active")
    }
    const hideNav = () => {
        nav.current.classList.remove("active")
        burger.current.classList.remove("active")
    }

    return (
        <header className="header">
            <div className="header__logo">
                <Link href="/"><img src="img/logo.svg" alt="" /></Link>
            </div>
            <div className="header__button" onClick={toggleNav}>
                <div className="header__burger" ref={burger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <nav className="header__nav" ref={nav}>
                <ul className="header__nav__list">
                    <li className="header__nav__item">
                        <Link href="/info">Info</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
