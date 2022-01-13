import React from 'react'
import Stories from './Stories'
import "../styles/cards.scss"
import Card from "./Card"

const Cards = () => {

    const commentsOne = [
        {
            id: 1,
            user: 'sdfghj',
            text: 'lorem ipsum jlvb shdjkcbskj'
        },
        {
            id: 2,
            user: 'Najim',
            text: 'jlvb shdjkcbskj'
        },
        {
            id: 3,
            user: 'Shaxzod',
            text: 'Like !'
        }
    ];

    const commentsTwo = [
        {
            id: 4,
            user: 'Baron',
            text: 'Bomba'
        },
    ];

    const commentsThree = [
        {
            id: 5,
            user: 'Ketmonjon',
            text: 'lorem ipsum jlvb shdjkcbskj'
        }
    ];

    return (
        <div className="cards">
            <Stories />
            <Card
                accountName="asdfghjhgfds"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsOne}
                likedByText="gfdsfdg"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="asdfghjhgfds"
                storyBorder={true}
                image="https://picsum.photos/800/1000"
                comments={commentsOne}
                likedByText="gfdsfdg"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="asdfghjhgfds"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsOne}
                likedByText="gfdsfdg"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="asdfghjhgfds"
                storyBorder={true}
                image="https://picsum.photos/800"
                comments={commentsOne}
                likedByText="gfdsfdg"
                likedByNumber={89}
                hours={16}
            />
            <Card
                accountName="asdfghjhgfds"
                storyBorder={true}
                image="https://picsum.photos/800/900"
                comments={commentsOne}
                likedByText="gfdsfdg"
                likedByNumber={89}
                hours={16}
            />
        </div>
    )
}

export default Cards
