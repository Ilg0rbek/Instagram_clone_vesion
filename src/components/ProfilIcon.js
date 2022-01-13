import React from 'react'
import "../styles/ProfilIcon.scss"

const ProfilIcon = (props) => {

    const { iconSize, storyBorder } = props;

    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let randomId = getRandomInt(1, 70);

    let profileImage = `https://i.pravatar.cc/150?img=${randomId}`

    return (
        <div className={storyBorder ? "storyBorder" : ""}>
            <img style={{ borderRadius: "50%", width: "50px" }} src={profileImage} alt="" className={`profileIcon  ${iconSize}`} />
        </div>
    )
}

export default ProfilIcon
