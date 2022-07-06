import React, { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import slidesApi from '../apifolder/SliderAPI';

const Slider = () => {

    const [slides] = useState(slidesApi);
    console.log(slides);

    const [activeSlide, setActiveSlide] = useState(0);

    const prevSlide = () => {
        if (activeSlide === 0) {
            setActiveSlide(slides.length - 1);
        } else {
            setActiveSlide(activeSlide - 1);
        }
    };

    const nextSlide = () => {
        if (activeSlide === slides.length - 1) {
            setActiveSlide(0);
        } else {
            setActiveSlide(activeSlide + 1);
        }
    };

    return (
        <div className='flex h-[540px] bg-white justify-between items-center'>
            <div className="left-arrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer p-[6px]">
                <ArrowBackIosNewRoundedIcon style={{ fontSize: '50px' }} onClick={prevSlide} />
            </div>

            {
                slides.map((slide, idx) => {
                    console.log(slide);
                    if (idx === activeSlide) {
                        return (
                            <div className="current-slide flex justify-center items-center w-[100%] h-[500px] shadow-2xl rounded-xl border-[#c0c0c0] border-10px overflow-hidden relative">
                                <div className="slide flex justify-center items-center h-[100%]">
                                    <div className='img w-[100%] h-[100%]'>
                                        <img className='w-[100%] h-[100%] object-contain' src={slide.src} alt='first slider' />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

            <div className="right-arrow rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer p-[6px]">
                <ArrowForwardIosRoundedIcon style={{ fontSize: '50px' }} onClick={nextSlide}/>
            </div>
        </div>
    );
};

export default Slider;