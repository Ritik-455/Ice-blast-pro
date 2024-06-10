import React from 'react'
import toplayer from '../assets/images/PNG/top-layer.png'
import bottomlayer from '../assets/images/PNG/bottom-layer.png'
import Commonheading from '../common/Commonheading'
import blastright from '../assets/images/PNG/blast-right-img.png'
import blastleft from '../assets/images/PNG/blast-left.png'

function Understanding() {
    return (
        <>
            <div className="bg-orange position-relative" id="about">
                <div className=""><img src={toplayer} alt="toplayer" className=' w-100 mt-neg-3' /></div>
                <div className="container">
                    <Commonheading text="Understanding Dry Ice Blasting" color="text-white" align=" text-center" />
                    <div className="row py-under">
                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
                            <p className=' ff-acumin-bold text-24 lh-36 text-white mb-0'>What is Dry Ice Blasting?</p>
                            <p className=' ff-acumin-reg text-18 lh-27 text-white mb-0 op-90 mt-2 max-w-558'>Dry ice blasting is an innovative cleaning technology that uses solid CO2 (carbon dioxide) pellets. These pellets are propelled at high speeds to clean surfaces. Unlike traditional cleaning methods, this process does not involve water or abrasive materials, making it incredibly safe and effective for delicate areas like engine bays, undercarriages, and even car interiors.</p>
                        </div>
                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                            <img src={blastright} alt="blastright" className=' w-100 d-xxl-none' />
                        </div>
                    </div>
                </div>
                <div className="position-absolute img-right-pos d-none d-xxl-block">
                    <img src={blastright} alt="blastright" />
                </div>
                <div className="container pb-under2">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                            <img src={blastleft} alt="blastleft" className=' w-100 d-xxl-none' />

                        </div>
                        <div className="col-12 col-lg-6">
                            <p className=' ff-acumin-bold text-24 lh-36 text-white mb-0'>How Does Dry Ice Blasting Work?</p>
                            <p className=' ff-acumin-reg text-18 lh-27 text-white mb-0 op-90 mt-2 max-w-558'>The process begins with the dry ice pellets being accelerated in a jet of compressed air, similar to sandblasting but with a crucial difference. Upon contact with the surface, the dry ice pellets undergo sublimation - they turn directly from solid to gas without becoming liquid. This reaction creates a micro-explosion on the surface, lifting dirt and contaminants away.</p>
                        </div>
                    </div>
                </div>
                <div className="position-absolute img-left-pos d-none d-xxl-block">
                    <img src={blastleft} alt="blastleft" />
                </div>
                <div className="">
                    <img src={bottomlayer} alt="bottomlayer" className=' w-100 mb-neg-3' />
                </div>
            </div>
        </>
    )
}

export default Understanding