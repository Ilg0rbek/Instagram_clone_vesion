import React from 'react'
import Sticky from 'react-sticky-el'
import Profile from "./Profile"
import Suggestions from './Suggestions'
import Footer from './Footer'
import Image from '../images/profileIcon.jpeg'
import "../styles/seidbar.scss"

const Seidbar = () => {
    return (
        <Sticky topOffset={-80}>
            <div className="seidbar">
                <Profile
                    username="Aleks.papovich"
                    caption='aleksandr papovich'
                    urlText="Switch" iconSize='big'
                    image={Image}
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    )
}

export default Seidbar
