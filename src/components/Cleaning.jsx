import React from 'react'
import Commonheading from '../common/Commonheading'
import { Check, Play } from '../common/Icon'
import Clean from '../assets/images/PNG/cleaning-img.webp'
import Comnbtn from '../common/Comnbtn'

function Cleaning() {
    return (
        <>
            <div className="bg-cleaning">
                <div className="container mt-cleaing mb-3">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <Commonheading text="The Future of Car Cleaning" color="color-darkblue" width="max-w-351" />
                            <p className=' ff-acumin-reg text-16 lh-24 color-darkblue mb-0 max-w-558 mt-3'>No need to be overwhelmed by the thought of harsh chemicals and abrasive cleaning methods. Our dry ice blasting leaves your car spotless, reaching where no cloth can.</p>
                            <div className="d-flex gap-3 mt-4">
                                <Check />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 mb-0'>Gentle Yet Powerful</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 color-grey max-w-518 mb-0'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <Check />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 mb-0'>Precision Cleaning</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 color-grey max-w-518 mb-0'>See how accurately we target the grunge zones, ensuring every inch of your car's undercarriage and engine is meticulously cleaned.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <Check />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 mb-0'>Safe for AlI Vehicles</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 color-grey max-w-518 mb-0'>Perfect for all car types, from family hatchbacks to classic cars and high-performance vehicles.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-3 mt-3">
                                <Check />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 mb-0'>Gentle Yet Powerful</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 color-grey max-w-518 mb-0'>Our dry ice method lifts dirt effortlessly without the need for harsh chemicals or abrasive techniques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                            <div className="position-relative"><img src={Clean} alt="clean" className=' max-w-558 w-100' />
                                <div className="position-absolute play-pos">
                                    <Play />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-20 mt-cleaing">
                        <p className=' ff-acumin-bold text-16 lh-24 color-grey mb-0'>Like What You See? Get an Instant Quote</p>
                        <Comnbtn text="Get Instant Quote" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cleaning