import React from 'react'
import Commonheading from '../common/Commonheading'
import news1 from '../assets/images/PNG/news-1.webp'
import news2 from '../assets/images/PNG/news-2.webp'
import news3 from '../assets/images/PNG/news-3.webp'
import Comnbtn from '../common/Comnbtn'

function News() {
    return (
        <>
            <div className="container pb-news" id="blog">
                <Commonheading text="Latest News & Insights" color="text-black" align="text-center" />
                <p className=' ff-acumin-reg text-16 lh-24 mb-0 text-black op-70 text-center mt-3'>Uncover the latest insights and innovation in car care.</p>
                <div className="row mt-50 justify-content-sm-center justify-content-lg-start">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="news-card w-100">
                            <img src={news1} alt="news1" className=' w-100' />
                            <p className=' ff-acumin-reg text-16 lh-24 text-black op-80 mt-20 mb-0'>January 1st, 2024</p>
                            <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0 mt-2'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-sm-0">
                        <div className="news-card w-100">
                            <img src={news2} alt="news1" className=' w-100' />
                            <p className=' ff-acumin-reg text-16 lh-24 text-black op-80 mt-20 mb-0'>January 1st, 2024</p>
                            <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0 mt-2'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-0">
                        <div className="news-card w-100">
                            <img src={news3} alt="news1" className=' w-100' />
                            <p className=' ff-acumin-reg text-16 lh-24 text-black op-80 mt-20 mb-0'>January 1st, 2024</p>
                            <p className=' ff-acumin-bold text-16 lh-24 text-black mb-0 mt-2'>What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary Car Cleaning</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Comnbtn text="More Blogs" spacing=" mt-40" />
                </div>
            </div>
        </>
    )
}

export default News