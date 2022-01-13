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
            <img
                style={{ borderRadius: "50%", width: "28px", height: "28px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQotgg-et_w1SFoda8Vw8VbYXAF8qrCfrv-jfx6_uo1EGV-FpOQecrKpwn1JiA9I19SsGU&usqp=CAU" alt="" />
        </div>
    )
}

export default Menu
