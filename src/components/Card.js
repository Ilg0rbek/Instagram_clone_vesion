import React from 'react'
import Profile from './Profile'
import CardMenu from './CardMenu'
import Comment from './Comment'
import '../styles/card.scss'

const Card = (props) => {

    const {
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours
    } = props

    return (
        <div className="card">
            <header>
                <Profile iconSize='medium' storyBorder={storyBorder} />
            </header>
            <img src={image} alt="" className="cardImage" />
            <CardMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountNeme={true} />
                <span>Liked by <strong>{likedByText}</strong> and {" "}
                    <strong>{likedByNumber} others</strong>
                </span>
            </div>
            <div className="comments">
                {
                    comments.map(comments => {
                        return (
                            <Comment
                                id={comments.id}
                                accountName={comments.name}
                                comment={comments.text}
                            />
                        )
                    })
                }
            </div>
            <div className="timePosted">{hours} hours ago</div>
            <div className="addComment">
                <div className="commanetText">Add a comment ......</div>
                <div className="postText">Post</div>
            </div>
        </div>
    )
}

export default Card
