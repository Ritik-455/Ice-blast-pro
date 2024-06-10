import React from 'react'
import toplayer from '../assets/images/PNG/blast-top-layer.png'
import bottomlayer from '../assets/images/PNG/blast-bottom.png'
import Commonheading from '../common/Commonheading'
import Comnbtn from '../common/Comnbtn'

function Prime() {
    return (
        <>
            <div className=""><img src={toplayer} alt="toplayer" className=' w-100' /></div>
            <div className="container">
                <Commonheading text="Blast The Grime and Bring Back The Prime" color=" text-black" align=" text-center" />
                <div className="d-flex justify-content-center">
                    <p className=' ff-acumin-reg text-16 lh-24 text-center color-grey op-70 mb-0 max-w-996 mt-3'>Rest easy knowing that our approach is tailored to protect and enhance your vehicle. We don’t clean; we care. Every treatment is a promise that your vehicle will not only look its best but also receive the care it needs for a longer, healthier life on the road.</p>
                </div>
                <p className=' ff-acumin-bold text-16 lh-19 mb-0 text-center mb-0 mt-3'>Ready For a Transformation? Get an Instant Quote</p>
                <div className="d-flex justify-content-center pb-2">
                    <Comnbtn text="Get Instant Quote" spacing=" mt-40"/>
                </div>
            </div>
            <div className=""><img src={bottomlayer} alt="bottomlayer" className=' w-100' /></div>
        </>
    )
}

export default Prime