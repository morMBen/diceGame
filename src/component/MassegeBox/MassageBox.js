import React from 'react'
import './massegeBox.css'
const MassageBox = (props) => {
    return (
        <div className="massageBox">
            <p>{props.myMassege}</p>
        </div>
    )
}

export default MassageBox;