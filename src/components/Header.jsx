import React from 'react'
import Navbar from './Navbar'
import { Loaction, Mail, Phone, Tick, Time } from '../common/Icon'
import Comnbtn from '../common/Comnbtn'

function Header() {
    return (
        <>
            <div className="bg-hero pb-4 pb-lg-0">
                <div className="container pt-1 pt-lg-3 d-flex justify-content-center">
                    <div className="d-lg-flex gap-65 flex-wrap d-none">
                        <div className="d-flex gap-10 align-items-center">
                            <div className="nav_circle d-flex justify-content-center align-items-center cursor-pointer">
                                <Loaction />
                            </div>
                            <p className=' ff-acumin-reg text-16 lh-24 text-white mb-0 op-70'>Crawley Mill Industrial Estate, Witney, Oxfordshire </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <div className="nav_circle d-flex justify-content-center align-items-center cursor-pointer">
                                <Mail />
                            </div>
                            <p className=' ff-acumin-reg text-16 lh-24 text-white mb-0 op-70'>book@dryiceblastingpro.co.uk </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <div className="nav_circle d-flex justify-content-center align-items-center cursor-pointer">
                                <Phone />
                            </div>
                            <p className=' ff-acumin-reg text-16 lh-24 text-white mb-0 op-70'>01865123456 </p>
                        </div>
                        <div className="d-flex gap-10 align-items-center">
                            <div className="nav_circle d-flex justify-content-center align-items-center cursor-pointer">
                                <Time />
                            </div>
                            <p className=' ff-acumin-reg text-16 lh-24 text-white mb-0 op-70'>Mon - Fri: 9am to 5pm</p>
                        </div>
                    </div>
                </div>
                <Navbar />
                <div className="container pt-87 pb-hero" id="home">
                    <h1 className=' ff-tilt text-96 lh-md-115 text-white mb-0 text-center'>Automotive Dry<span className="d-lg-block"> Ice Cleaning</span></h1>
                    <p className=' ff-acumin-reg text-20 lh-30 text-center text-white mb-0 mt-3'>Discover the ultimate clean for your machine.
                        <span className="d-lg-block">No chemicals, no abrasives and no drama.</span></p>
                    <div className="d-flex justify-content-center">
                        <Comnbtn text="Get Instant Quote" spacing="mt-40" />
                    </div>
                    <div className="d-flex justify-content-center mt-40">
                        <div className="blur_box">
                            <div className="d-flex align-items-center gap-28 flex-wrap">
                                <div className="d-flex gap-12 align-items-end">
                                    <div className="tick_circle d-flex justify-content-center align-items-center">
                                        <Tick />
                                    </div>
                                    <p className=' ff-acumin-bold text-16 lh-24 text-white mb-0'>Non-Abrasive</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <div className="tick_circle d-flex justify-content-center align-items-center">
                                        <Tick />
                                    </div>
                                    <p className=' ff-acumin-bold text-16 lh-24 text-white mb-0'>No Chemicals</p>
                                </div>
                                <div className="d-flex gap-12 align-items-end">
                                    <div className="tick_circle d-flex justify-content-center align-items-center">
                                        <Tick />
                                    </div>
                                    <p className=' ff-acumin-bold text-16 lh-24 text-white mb-0'>No Mess</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header