import React from 'react'
import ProfilIcon from './ProfilIcon'
import users from '../data/users'
import '../styles/story.scss'

const Story = () => {

    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if (accountName.length > 10) {
        accountName = accountName.substring(0, 10) + "..."
    }

    return (
        <div className="story">
            <ProfilIcon iconSize='big' storyBorder={true} />
            <span className="accounName">{accountName}</span>
        </div>
    )
}

export default Story
