import React, { useState, useEffect } from 'react'
import "./userProfile.css"
export default function UserAddress() {
    const [userAdd, setUserAdd] = useState({
        address1: "",
        address2: "",
        state: "",
        city: "",
        pincode: "",
        instagram: "",
        facebook: "",
        linkedin: "",
        github: "",
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserAdd((prevUserAdd) => ({
            ...prevUserAdd, [name]: value
        }))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { address1, address2, state, city, pincode, instagram, facebook, linkedin, github } = userAdd;
        if (address1.trim() === "") {
            alert("Please enter a valid address");
            return;
        }
        if (state.trim() === "") {
            alert("Please enter a valid state");
            return;
        }
        if (city.trim() === "") {
            alert("Please enter a valid city");
            return;
        }
        if (pincode.trim() === "") {
            alert("Please enter a valid pincode");
            return;
        }
        console.log(userAdd);
        setUserAdd({
            address1: "",
            address2: "",
            state: "",
            city: "",
            pincode: "",
            instagram: "",
            facebook: "",
            linkedin: "",
            github: "",
        })

    }

    return (
        <div className='background'>
            <div className="user__profile__background__card">
                <div className='form-container'>
                    <div className="form-header">
                        <h2>
                            Address
                        </h2>
                        <span className="form-cancel">X</span>
                    </div>
                    <div className="form-row row-1">
                        <div className="form-column-ua">
                            <label htmlFor="address1">Address1 *</label>
                            <input
                                className="long-input"
                                id="address1"
                                type="text"
                                name="address1"
                                value={userAdd.address1}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-row row-2">
                        <div className="form-column-ua">
                            <label htmlFor="address2">Address2</label>
                            <input
                                className="long-input"
                                id="address2"
                                type="text"
                                name='address2'
                                value={userAdd.address2}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-row row-3">
                        <div className="form-column">
                            <label htmlFor="state">State *</label>
                            <input
                                className="small-input"
                                id="state"
                                type="text"
                                name="state"
                                value={userAdd.state}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="city">City *</label>
                            <input
                                className="small-input"
                                id="city"
                                type="text"
                                name="city"
                                value={userAdd.city}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="pincode">Pincode *</label>
                            <input
                                className="small-input"
                                id="pincode"
                                type="text"
                                name="pincode"
                                value={userAdd.pincode}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-header">
                        <h2>
                            Social Links
                        </h2>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor='instagram'>Instagram</label>
                            <input
                                className='long-input'
                                id="instagram"
                                type="text"
                                name='instagram'
                                value={userAdd.instagram}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor='facebook'>Facebook</label>
                            <input
                                className='long-input'
                                id="facebook"
                                type="text"
                                name='facebook'
                                value={userAdd.facebook}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor='linkedin'>Linkedin</label>
                            <input
                                className='long-input'
                                id="linkedin"
                                type="text"
                                name='linkedin'
                                value={userAdd.linkedin}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor='github'>Github</label>
                            <input
                                className='long-input'
                                id="github"
                                type="text"
                                name='github'
                                value={userAdd.github}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="user__profile__background__card__buttons">
                    <button
                        className="user__profile__background__card__button"

                    >Apply</button>
                    <button className="user__profile__background__card__button">Save</button>
                </div>
            </div>
        </div>
    )
}
