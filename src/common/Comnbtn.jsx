import React from "react";

function Comnbtn(props) {
    return (
        <button className={` ${props.spacing} cmn-btn ff-acumin-bold text-capitalize text-16 lh-19 text-white`}>
            {props.text}
        </button>
    )
}
export default Comnbtn