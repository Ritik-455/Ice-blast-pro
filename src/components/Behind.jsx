import React from 'react'
import behtoplayer from '../assets/images/PNG/behind-top-layer.png'
import behbottomlayer from '../assets/images/PNG/blast-bottom-layer.png'
import Commonheading from '../common/Commonheading'
import blastcenter from '../assets/images/PNG/blast-center-img.webp'
import { Play } from '../common/Icon'
import Comnbtn from '../common/Comnbtn'

function Behind() {
    return (
        <>
            <div className="bg-behind">
                <div className=""><img src={behtoplayer} alt="behtoplayer" className=' w-100 mt-neg-3' /></div>
                <div className="container d-flex flex-column align-items-center pb-34 mt-lg-4">
                    <Commonheading text="Behind the Scenes Dry Ice Blasting a Car" color="text-white" align="text-center" width="max-w-489 33" />
                    <p className=' ff-acumin-reg text-16 lh-24 text-white mb-0 max-w-558 text-center mt-3'>From the initial setup to the final sweep, discover how we elevate car cleaning to an art form, delivering immaculate results every time.</p>
                    <div className=" mt-50 position-relative"><img src={blastcenter} alt="blastcenter" className=' max-w-1140 w-100'/>
                        <div className="position-absolute play-pos2">
                            <Play />
                        </div>
                    </div>
                    <p className=' ff-acumin-bold text-16 lh-24 mb-0 text-white mt-40'>Discover a cleaner, fresher, and more beautiful car, inside and out, with our advanced dry ice blasting services.</p>
                    <Comnbtn text="Get Instant Quote" spacing=" mt-20" />
                </div>
                <div className=""><img src={behbottomlayer} alt="behbottomlayer" className=' w-100 mb-neg-3' /></div>
            </div>
        </>
    )
}

export default Behind