import React from 'react'
import { FooterMessage, Footercall, Footerlocation, Footertime, Instagram, Tiktok, Youtube } from '../common/Icon'
import logo from '../assets/images/SVG/footerlogo.svg'

function Footer() {
    return (
        <>
            <div className="bg-darkblue">
                <div className="container">
                    <div className="d-flex gap-65 justify-content-lg-between pt-38 flex-wrap">
                        <div className="d-flex gap-10">
                            <Footerlocation />
                            <p className=' ff-acumin-reg text-16 lh-24 text-white op-70 mb-0'>Crawley Mill Industrial Estate, Witney, Oxfordshire</p>
                        </div>
                        <div className="d-flex gap-10">
                            <FooterMessage />
                            <p className=' ff-acumin-reg text-16 lh-24 text-white op-70 mb-0'>book@dryiceblastingpro.co.uk</p>
                        </div>
                        <div className="d-flex gap-10">
                            <Footercall />
                            <p className=' ff-acumin-reg text-16 lh-24 text-white op-70 mb-0'>01865123456</p>
                        </div>
                        <div className="d-flex gap-10">
                            <Footertime />
                            <p className=' ff-acumin-reg text-16 lh-24 text-white op-70 mb-0'>Mon - Fri: 9am to 5pm</p>
                        </div>
                    </div>
                    <div className="row mt-57">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <img src={logo} alt="logo" className=' cursor-pointer' />
                            <p className=' ff-acumin-reg text-16 lh-25 mb-0 text-white op-70 mb-0 mt-2'>IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists. Removing dirt and grime in hard to reach areas with a non-abrasive Dry Ice Blasting technique that requires no chemicals and leaves no mess.</p>
                        </div>
                        <div className="col-4 col-sm-6 col-lg-2 d-flex justify-content-center  mt-5 mt-sm-0">
                            <ul>
                                <li className=' ff-acumin-bold text-18 lh-27 mb-0 text-white'>Quick Link</li>
                                <li className=' mt-3'><a href=" " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>Home</a></li>
                                <li className=' mt-12'><a href="  " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>About Us</a></li>
                                <li className=' mt-12'><a href=" " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>Services</a></li>
                                <li className=' mt-12'><a href="  " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>Blog</a></li>
                                <li className=' mt-12'><a href=" " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>FAQ’s</a></li>
                                <li className=' mt-12'><a href=" " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-4 col-sm-6 col-lg-3 d-flex justify-content-lg-center mt-5 mt-lg-0">
                            <ul>
                                <li className=' ff-acumin-bold text-18 lh-27 mb-0 text-white'>Legal Information</li>
                                <li className=' mt-3'><a href=" " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>Terms of Service</a></li>
                                <li className=' mt-12'><a href=" " className=' ff-acumin-reg text-16 lh-25 text-white op-70 footer_link'>Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-4 col-sm-6 col-lg-3 d-flex justify-content-center mt-5 mt-lg-0">
                            <ul>
                                <li className=' ff-acumin-bold text-18 lh-27 mb-0 text-white'>Follow us</li>
                                <div className="d-flex gap-12 align-items-center mt-3">
                                    <a href="https://www.instagram.com/" target=' _blank'>
                                        <div className="icon-circle d-flex justify-content-center align-items-center">
                                            <Instagram />
                                        </div>
                                    </a>
                                    <p className=' ff-acumin-reg text-16 lh-24 mb-0 text-white op-70'>Instagram</p>
                                </div>
                                <div className="d-flex gap-12 align-items-center mt-18">
                                    <a href="https://www.tiktok.com/" target=' _blank'>
                                        <div className="icon-circle d-flex justify-content-center align-items-center">
                                            <Tiktok />
                                        </div>
                                    </a>
                                    <p className=' ff-acumin-reg text-16 lh-24 mb-0 text-white op-70'>Tiktok</p>
                                </div>
                                <div className="d-flex gap-12 align-items-center mt-18">
                                    <a href="https://www.youtube.com/" target=' _blank'>
                                        <div className="icon-circle d-flex justify-content-center align-items-center">
                                            <Youtube />
                                        </div>
                                    </a>
                                    <p className=' ff-acumin-reg text-16 lh-24 mb-0 text-white op-70'>YouTube</p>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <p className=' ff-acumin-reg text-14 lh-16 text-white op-70 mb-0 text-center mt-48 pb-25'>Copyright©2024(IceBlastPro) All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer