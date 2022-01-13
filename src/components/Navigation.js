import React from 'react'
import logo from '../images/insta.png'
import searchIcon from "../images/search-icon.png"
import "../styles/navigation.scss"
import Menu from "./Menu.js"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <img src={logo} alt="Insagram logo" />
                <div className="search">
                    <img src={searchIcon} className='searchIcon' alt="" />
                    <span className='searchTeaxt'> Search </span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation
