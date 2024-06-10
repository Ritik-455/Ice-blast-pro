import React, { useState } from 'react'
import Accordion from '../components/Accordion';


const Helper = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
            <div className=' d-flex justify-content-center'>
                <div class=" mt-50 d-flex flex-column gap-20 w-100 max-w-1140">
                    <div class="bg-sky max-w-1140 br-14 cursor-pointer">
                        <Accordion
                            title="Engine Bay Perfection from £375 "
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 0}
                            toggleAccordion={() => toggleAccordion(0)}
                        />
                    </div>
                    <div class="bg-cho max-w-1140 br-14 cursor-pointer">
                        <Accordion
                            title="Underbelly Deep-Clean from £750"
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 1}
                            toggleAccordion={() => toggleAccordion(1)}
                        />
                    </div>
                    <div class="bg-lightylw max-w-1140 br-14 cursor-pointer">
                        <Accordion
                            title="Ultimate Undercarriage & Engine Bay Overhaul from £1,125"
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 2}
                            toggleAccordion={() => toggleAccordion(2)}
                        />
                    </div>
                    <div class="bg-ylw max-w-1140 br-14 cursor-pointer">
                        <Accordion
                            title="Need Something Else?"
                            content="Crank up the cool factor under your hood with engine bay ice blasting. We delicately lift away oil, grease, and grime without water or chemicals. It's the ultimate detox for your engine, ensuring every hose, wire, and component is treated with the respect it deserves."
                            isOpen={openIndex === 3}
                            toggleAccordion={() => toggleAccordion(3)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Helper