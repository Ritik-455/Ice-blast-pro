import React from "react";

function Commonheading(props) {
    return <h2 className={` ${props.color} ${props.spacing} ${props.width} ${props.align} ff-tilt text-48 lh-sm-57 mb-0`} >{props.text}</h2>;
}

export default Commonheading;