import React from 'react'
import '../styles/suggestions.scss'
import Profile from './Profile'

const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title"> Suggestion for you  </div>
                <a href="/">See all</a>
            </div>

            <Profile
                caption='Followed by mapvalut + 3 more'
                urlText='follow'
                iconSize='medium'
                captionSize='small'
                stroyBorder={true}
            />
            <Profile
                caption='Followed by mapvalut + 3 more'
                urlText='follow'
                iconSize='medium'
                captionSize='small'
                stroyBorder={true}
            />
            <Profile
                caption='Followed by mapvalut + 3 more'
                urlText='follow'
                iconSize='medium'
                captionSize='small'
                stroyBorder={true}
            />
            <Profile
                caption='Followed by mapvalut + 3 more'
                urlText='follow'
                iconSize='medium'
                captionSize='small'
                stroyBorder={true}
            />
            <Profile
                caption='Followed by mapvalut + 3 more'
                urlText='follow'
                iconSize='medium'
                captionSize='small'
                stroyBorder={true}
            />
            <Profile
                caption='Followed by mapvalut + 3 more'
                urlText='follow'
                iconSize='medium'
                captionSize='small'
                stroyBorder={true}
            />

        </div>
    )
}

export default Suggestions
