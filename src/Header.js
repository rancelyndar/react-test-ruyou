import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink activeClassName="header__active-link" className="header__link" to="/" exact>Форма</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink activeClassName="header__active-link" className="header__link" to="/palette">Палитра</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header