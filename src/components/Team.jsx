import React from 'react'
import team from '../assets/images/PNG/team.webp'
import teamellips from '../assets/images/PNG/team-ellips.png'
import Commonheading from '../common/Commonheading'
import bottomlayer from '../assets/images/PNG/team-bottom-layer.png'

function Team() {
    return (
        <>
            <div className="container">
                <div className="row pt-88">
                    <div className="col-12 col-lg-6 d-flex justify-content-lg-center">
                        <div className="position-relative"><img src={team} alt="team" className=' max-w-461 w-100' />
                            <div className="position-absolute team-ellips-pos d-none d-lg-block">
                                <img src={teamellips} alt="teamellips" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="">
                            <Commonheading text="Meet The Team" />
                            <p className=' ff-acumin-bold text-18 lh-21 mb-0 mt-2'>Oxfordshire's Dry Ice Car Cleaning Specialists</p>
                            <p className=' ff-acumin-reg text-16 lh-24 mb-0 text-black mt-3'>We’re shaking up the car cleaning scene with Dry Ice Blasting. From our buzzing unit in Oxfordshire, we're not just a team - we’re a Crew of car enthusiasts, expert restorers, and skilled mechanics united by our love for cars. We treat every car like it’s our own, driven by a philosophy that doing the right thing for your ride is the only way to go. When you hand over your keys to us, you're entrusting your pride and joy to fellow car lovers who understand that every car deserves precision care and a touch of cool.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" position-relative z-n2">
                <img src={bottomlayer} alt="bottomlayer" className=' w-100' />
            </div>
        </>
    )
}

export default Team