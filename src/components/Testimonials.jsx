import React from 'react'
import TestimonialsPic from '../assets/TestimonialsPic.png'
import testpic from '../assets/testpic.png'
import Tetspic2 from '../assets/Tetspic2.png'
import Pattern from '../assets/Pattern.png'
import arrow from '../assets/arrow.svg'
import PurpleArrow from '../assets/PurpleArrow.svg'
import  TestimonialsCard  from './TestimonialsCard'
import TestimonialsContent from '../constants'

import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export const Testimonials = () => {
  return (
    <div className='flex bg-[#FAF6FF] justify-center items-center flex-col px-3'>
        <div className='flex gap-9 justify-center items-center max-lg:flex-col pl-[68px]'>
            <div className='flex flex-col justify-center'>
                <h1 className='font-jakarta text-[42px] font-[700] leading-[58px] text-start text-zinc-800 '>
                     What they say about us
                </h1>
                <div className='mt-4 font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-[#8A8394] max-w-[458px] text-start'>
                 Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci. Nunc urna, vitae sit sapien diam diam cursus. Cras tempus venenatis consequat.
                </div>
                <div className='flex gap-4 mt-8'>
                <div className='w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center'> 
                        <img
                            src={PurpleArrow}
                            alt='arrow'
                            className='w-[36px] h-[36px] object-contain'
                        />
                    </div>
                    <div className='w-[80px] h-[80px] rounded-full bg-primary flex justify-center items-center'> 
                        <img
                            src={arrow}
                            alt='arrow'
                            className='w-[36px] h-[36px] object-contain'
                        />
                    </div>
                </div>
            </div>
            <Splide
                aria-label='Testimonails About Us'
                className='mt-10 w-full flex justify-center items-start ml-0'
                options={
                    {
                      pagination: true,
                      // drag: 'free',
                      snap: true,
                      arrows: false,
                      easing: 'ease',
                      autoplay: true,
                      gap: '20px',
                      // fixedWidth: 'auto',
                      perPage: 3,
                      wheel: true,
                      mediaQuery: 'max',
                      breakpoints:
                      {
                          768:{
                            perPage: 2,
                            width: '1000px',
                          },
                          375:{
                            perPage: 1,
                          },
                          1260:{
                            perPage:3,
                          },
                          690:{
                            perPage:2,
                            // width: '500px',
                          },
                      }
                      
                    }
                  }  
            >
                {TestimonialsContent.map((Testimonail) => (
                    <SplideSlide key={Testimonail.id}>
                        <TestimonialsCard {...Testimonail} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
        <div className='bg-secondary2 flex rounded-[16px]  pl-[78px] relative mt-[64px] mb-[68px] gap-[102px] justify-between items-center'>
            <div className='flex flex-col gap-[24px] max-md:py-[78px]'>
                <h1 className='font-jakarta text-[52px] font-[700] leading-[78px] max-w-[584px] text-start'>
                    Subscribe to get more updates about us
                </h1>
                <h3 className='font-jakarta text-[16px] font-[500] leading-[32px] tracking-[0.16px] max-w-[515px] text-start'>
                    Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
                </h3>
                <div className='flex rounded-[100px] bg-white min-h-[80px] mr-[94px] justify-between items-center min-w-[300px]'>
                     <h1 className='font-jakarta text-[16px] leading-[28.8px] text-[#9891A3] font-[700] ml-[28px]'>Insert your email here</h1>
                     <button className='font-jakarta text-[16px] font-[700] leading-[28.8px] rounded-[100px] bg-primary py-[17px] px-[33px] m-2 backdrop-blur-[25px] hover:shadow-2xl hover:shadow-primary transition ease-out duration-700'>
                        Subscribe
                     </button>
                </div>
            </div>
            {/* <div className='absolute -top-[61px] -right-[0px] md:block hidden'>
            <img
                src={testpic}
                alt='Testimonials'
                className='w-[100%] object-contain'
            />
            </div> */}
            <div className='absolute -top-1 right-0'>
                <img
                    src={Pattern}
                    alt='Testimonials'
                    className='w-[100%] object-contain'
                />
            </div>
            <img
                src={Tetspic2}
                alt='Testimonials'
                className='md:block hidden  object-cover overflow-visible relative -top-10 -mb-[40px]'
            
            />
            {/* <div className='relative w-full'>
            <img
                    src={Tetspic2}
                    alt='Testimonials'
                    className='md:block hidden  object-cover overflow-visible border-2'
                />
            </div> */}
            {/* <div className='relative h-full -mb-[56px] -top-14 origin-bottom-right bottom-0'>
                <img
                    src={Tetspic2}
                    alt='Testimonials'
                    className=' md:block hidden  object-contain pr-2 overflow-visible border-2 h-full w-full'
                />
            </div> */}
        </div>
            
    </div>
  )
}
