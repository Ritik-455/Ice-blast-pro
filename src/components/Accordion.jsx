import React from "react";
import { Minus, Plus } from "../common/Icon";



const Accordion = ({ title, content, isOpen, toggleAccordion }) => {
    return (
        <>
            <div className="accordion_small_box">
                <div
                    className=" d-lg-flex  justify-content-between"
                    onClick={toggleAccordion}
                >
                    <div className="d-flex justify-content-between">
                        <p className=" ff-acumin-bold text-28 lh-sm-39  text-black mb-0">{title}</p>
                        <div className=" d-lg-none">{isOpen ? <Minus /> : <Plus />}</div>
                    </div>
                    {isOpen && <div className=" ff-acumin-reg text-16 lh-25 text-black op-70 mb-0 max-w-551">{content}</div>}

                    <div className=" d-none d-lg-block">{isOpen ? <Minus /> : <Plus />}</div>
                </div>
            </div>
        </>
    );
};

export default Accordion;