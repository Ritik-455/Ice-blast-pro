import React from 'react'
import Commonheading from '../common/Commonheading'
import clean from '../assets/images/SVG/cleaning.svg'
import abras from '../assets/images/SVG/abrasive.svg'
import res from '../assets/images/SVG/residue.svg'
import book from '../assets/images/SVG/book.svg'
import blast from '../assets/images/PNG/blasting.webp'

function Blasting() {
    return (
        <>
            <div className="container pb-blasting" id="service">
                <Commonheading text="Why Choose Dry Ice Blasting for Your Car?" color="text-black" align=" text-center" />
                <div className="row mt-4 mt-lg-5">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <div className="">
                            <div className="d-flex gap-12">
                                <img src={clean} alt="clean" />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0'>Effective Cleaning</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 max-w-451 mb-0'>The sublimation process effectively removes dirt, oil, and grime, even in hard-to-reach areas.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-12 mt-28">
                                <img src={abras} alt="abras" />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0'>Non-Abrasive</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 max-w-451 mb-0'>Unlike sandblasting or chemical cleaning, dry ice blasting won’t damage your car’s components or paint.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-12 mt-28">
                                <img src={res} alt="clean" />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0'>No Residue</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 max-w-451 mb-0'>Since dry ice sublimates, there’s no residual waste to clean up, making it an environmentally friendly option.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-12 mt-28">
                                <img src={book} alt="book" />
                                <div className="">
                                    <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0'>Safe for Various Materials</p>
                                    <p className=' ff-acumin-reg text-16 lh-24 max-w-451 mb-0'>It’s safe for use on metals, plastics, rubbers, fabrics and more, ensuring comprehensive cleaning without damage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 d-md-flex align-items-center d-lg-block">
                        <img src={blast} alt="blast" className=' w-100 max-w-558' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blasting