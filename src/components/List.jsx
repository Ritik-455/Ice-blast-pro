import React, { useState } from 'react'
import Commonheading from '../common/Commonheading'
import Comnbtn from '../common/Comnbtn'
import Checkmark from '../assets/images/SVG/checkmark.svg'
import message from '../assets/images/SVG/message.svg'

function List() {
    const [check, setcheck] = useState(false)

    const handleCheck = () => {
        setcheck(!check)
    }



    return (
        <>
            <div className="container" id="contact">
                <div className="d-flex justify-content-center">
                    <div className="mail-box position-relative transform-y-box px-2 px-sm-0" data-aos="fade-down">
                        <Commonheading text="Join Our Mailing List" color=" text-white" align=" text-center" />
                        <p className=' ff-acumin-reg text-16 lh-24 text-center text-white mt-2'>Get news, videos and deals straight to your inbox.</p>
                        <div className="mail-input mx-auto">
                            <div className="d-flex justify-content-between">
                                <input type="text" placeholder='Enter your email address ' className=' ff-acumin-reg text-16 lh-22 text-black w-100 border-0 out-none' />
                                <div className="d-none d-sm-block">
                                    <Comnbtn text="Subscribe" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center d-sm-none">
                            <Comnbtn text="Subscribe" spacing="mt-2"/>
                        </div>
                        <div className="d-flex gap-2 align-items-center justify-content-center mt-20">
                            <div className="check-box d-flex justify-content-center align-items-center cursor-pointer" onClick={handleCheck}>
                                <img className={`${check ? "d-block" : "d-none"}`} src={Checkmark} alt="Checkmark" />
                            </div>
                            <p className=' ff-acumin-reg text-14 lh-14 color-light-white mb-0'>I consent to receive emails & confirm I have read the <span className=' ff-acumin-bold'>privacy policy.</span></p>
                        </div>
                        <div className="position-absolute mes-pos"><img src={message} alt="message" /></div>
                    </div>
                </div>
            </div>
            <div className="d-flex"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.5276905771116!2d-99.16711566831054!3d19.43597036622747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8ca0daba7f1%3A0x9804627743e74c1d!2sC.%20Joaqu%C3%ADn%20Vel%C3%A1zquez%20de%20Le%C3%B3n%20117%2C%20San%20Rafael%2C%20Cuauht%C3%A9moc%2C%2006470%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sin!4v1717570839380!5m2!1sen!2sin" width="100%" height="456"></iframe></div>
        </>
    )
}

export default List