import React from 'react'
import "../styles/menu.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import ProfilIcon from "./ProfilIcon"
import image from "../images/profileIcon.jpeg"

const Menu = () => {
    return (
        <div className="menu">
            <FontAwesomeIcon className='icon' icon={faHome} />
            <FontAwesomeIcon className='icon' icon={faComment} />
            <FontAwesomeIcon className='icon' icon={faCompass} />
            <FontAwesomeIcon className='icon' icon={faHeart} />
            <ProfilIcon iconSize="small" image={image} />
        </div>
    )
}

export default Menu
