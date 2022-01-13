import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/cardMenu.scss'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
const CardMenu = () => {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <FontAwesomeIcon className='icon' icon={faHeart} />
                <FontAwesomeIcon className='icon' icon={faComment} />
                <FontAwesomeIcon className='icon' icon={faPaperPlane} />
            </div>
            <FontAwesomeIcon className='icon' icon={faBookmark} />
        </div>
    )
}

export default CardMenu
