import React, { useState } from 'react'
import "./userInterest.css"

export default function UserInterest() {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const interests = ["React js", "Angular", "Vue", "Web Development", "machine Learning"]
    const handleInterestClick = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    }

    const sendChoosenInterests = () => {
        console.log(selectedInterests);
        setSelectedInterests([]);
    }

    const filteredInterests = interests.filter((interest) => {
        return interest.toLowerCase().includes(searchTerm.toLowerCase());
    })

    //interests buttons
    const toBeRenderedInterests = filteredInterests.map((interest) => {
        return (
            <div
                onClick={() => handleInterestClick(interest)}
                className={`user__interest__element`}
                key={interest}
                style={{
                    backgroundColor: selectedInterests.includes(interest) ? 'skyBlue' : '',
                    color: selectedInterests.includes(interest) ? "white" : "black"
                }}
            >
                {interest}
            </div >
        )
    })


    return (
        <div className="user__interest__background">
            <div className="user__interest__header__box">
                <div className="user__interest__header">
                    <h2 className="user__interest__header__slogan">Choose Your Interests</h2>
                    <h3 className="user__interest__header__qoute">Pick up your favorite toppics to set up your feilds</h3>
                    <input
                        type="text"
                        placeholder='Search Interests'
                        className="user__interest__search__bar"
                        name="searchBar"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                </div>
            </div>

            <div className="user__interest__background__card">
                <div className="user__interest__background__card__element__box">
                    {toBeRenderedInterests}
                </div>
                <div className="user__interest__button_box">
                    <button className="user__interest__button">Cancel</button>
                    <button
                        className="user__interest__button"
                        onClick={sendChoosenInterests}
                    >
                        Apply
                    </button>
                </div>

            </div>
        </div>
    )
}
