import React from 'react'
import { useState } from 'react';
import Comnbtn from '../common/Comnbtn';
import { Navcross, Navline } from '../common/Icon';
import logo from '../assets/images/SVG/logo.svg'


function Navbar() {
    const [show, setfirst] = useState(false);

    if (show === true) {
        document.body.classList.add('overflow_hidden')
    }
    else {
        document.body.classList.remove('overflow_hidden')
    }

    return (
        <>
            <div className="container mt-3 d-flex justify-content-center">
                <nav className=' d-flex justify-content-between w-100 align-items-center nav_box'>
                    <img src={logo} alt="logo" className='cursor-pointer' />
                    <div className={`${show ? "end-0" : "right_100"} d-flex gap-5 mobile-view`}>
                        <ul className="d-flex flex-column flex-lg-row gap-4 align-items-center">
                            <li><a href="#home" className=' ff-acumin-bold text-16 lh-19 color-grey nav_link'>Home</a></li>
                            <li><a href="#about" className=' ff-acumin-bold text-16 lh-19 color-grey nav_link'>About us</a></li>
                            <li><a href="#service" className=' ff-acumin-bold text-16 lh-19 color-grey nav_link'>Services</a></li>
                            <li><a href="#pricing" className=' ff-acumin-bold text-16 lh-19 color-grey nav_link'>Pricing</a></li>
                            <li><a href="#blog" className=' ff-acumin-bold text-16 lh-19 color-grey nav_link'>Blog</a></li>
                            <li><a href="#contact" className=' ff-acumin-bold text-16 lh-19 color-grey nav_link'>Contact us</a></li>
                        </ul>
                    </div>
                    <Comnbtn text="Call Us" />
                    <div className="menu z-5 d-lg-none" onClick={() => {
                        setfirst(!show);
                    }}>
                        <span>{show === false ? <Navline /> : <Navcross />}</span>
                    </div>
                </nav>
            </div >
        </>
    )
}

export default Navbar