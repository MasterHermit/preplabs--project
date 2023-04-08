import React, { useState, useEffect } from 'react'
import "./userProfile.css";

export default function WorkExp() {
    const [workExp, setWorkExp] = useState({
        designation: "",
        sector: "",
        startDate: "",
        endDate: "",
        company: "",
        country: "",
        city: "",
        state: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setWorkExp((prevWorkData) => (
            {
                ...prevWorkData, [name]: value
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const { designation, sector, startDate, endDate, company, country, city, state } = workExp;
        if (designation.trim() === "") {
            alert("Please enter designation");
            return;
        }
        if (sector.trim() === "") {
            alert("Please enter sector");
            return;
        }
        if (startDate.trim() === "") {
            alert("please enter start date")
            return;
        }
        if (endDate.trim() === "") {
            alert("please enter end date")
            return;
        }
        if (company.trim() === "") {
            alert("please enter company")
            return;
        }
        if (country.trim() === "") {
            alert("please enter country")
            return;
        }
        if (city.trim() === "") {
            alert("please enter city")
            return;
        }
        if (state.trim() === "") {
            alert("please enter state")
            return;
        }

        console.log(workExp);
        // setWorkExp(
        //     {
        //         designation: "",
        //         sector: "",
        //         startDate: "",
        //         endDate: "",
        //         company: "",
        //         country: "",
        //         city: "",
        //         state: ""
        //     }
        // )
    }


    useEffect(() => {

    }, [])
    return (
        <div className='background'>
            <div className="user__profile__background__card">

                <div className="form-container">
                    <div className="form-header">
                        <h2>
                            Work Experience
                        </h2>
                        <span className="form-cancel">X</span>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="input1">Designation *</label>
                            <input
                                className="long-input"
                                id="input1"
                                type="text"
                                name="designation"
                                value={workExp.designation}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="input2">Sector *</label>
                            <input
                                className="long-input"
                                id="input2"
                                type="text"
                                name="sector"
                                value={workExp.sector}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="input3">Start Date *</label>
                            <input
                                className="long-input"
                                id="input3"
                                type="text"
                                name="startDate"
                                value={workExp.startDate}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="input4">End Date *</label>
                            <input
                                className="long-input"
                                id="input4"
                                type="text"
                                name="endDate"
                                value={workExp.endDate}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="input5">Company *</label>
                            <input
                                className="long-input"
                                id="input5"
                                type="text"
                                name="company"
                                value={workExp.company}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="input6">Country *</label>
                            <input
                                className="long-input"
                                id="input6"
                                type="text"
                                name="country"
                                value={workExp.country}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="input7">City *</label>
                            <input
                                className="long-input"
                                id="input7"
                                type="text"
                                name="city"
                                value={workExp.city}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="input8">State *</label>
                            <input
                                className="long-input"
                                id="input8"
                                type="text"
                                name="state"
                                value={workExp.state}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="user__profile__background__card__buttons">
                    <button className="user__profile__background__card__button">Apply</button>
                    <button
                        className="user__profile__background__card__button"
                        onClick={handleOnSubmit}
                    >Save</button>
                </div>
            </div>
        </div>
    )
}
