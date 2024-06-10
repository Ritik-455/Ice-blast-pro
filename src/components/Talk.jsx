import React from 'react'
import Commonheading from '../common/Commonheading'
import Comnbtn from '../common/Comnbtn'
import Helper from '../common/Helper'

function Talk() {
    return (
        <>
            <div className="container pb-40 pt-talk mb-4" id="pricing">
                <Commonheading text="Let's Talk Numbers" color="text-black" align="text-center" />
                <div className=" d-flex justify-content-center">
                    <p className=' ff-acumin-reg text-16 lh-24 color-grey mb-0 text-center max-w-759 mt-3'>We're all about transparency, but we also know that each car tells a different story. The cost can vary based on how much grime we're up against. More dirt might mean more ice and more time to get that perfect finish. But don't sweat it – we'll always give you a straight price, customised to your car's needs.</p>
                </div>
                <Helper />
                <div className="d-flex justify-content-center mt-40">
                    <div className="instant-box d-flex flex-column align-items-center">
                        <p className=' ff-tilt text-32 lh-44 text-black mb-0 text-center'>Get an Instant Quote Today</p>
                        <p className=' ff-acumin-reg text-16 lh-24 text-center text-black mb-0 max-w-770 mt-3'>Regular dry ice cleaning prevents costly rust and wear. Avoid potentially thousands of pounds worth of bodywork repairs when just for a fraction of that you can keep your car in prime condition all year round! What are you waiting for?</p>
                        <Comnbtn text="Get Instant Quote" spacing=" mt-40" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Talk