import React from 'react'

const TestimonialsCard = ({name, tag, image, quote}) => {
  return (
    <div className='flex flex-col justify-center items-center pt-[40px] pb-[20px] px-[20px] max-w-[336px] bg-white rounded-lg'>
        <img
            src={image}
            alt='Testimonials'
            className='w-[100px] h-[100px] object-cover rounded-full mb-[20px]'
        />
        <div className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-[#322F37] text-start'>
            {quote}
        </div>
        <div className='w-full h-[2px] flex bg-[#A79FB3] mt-[20px]'>

        </div>
        <div className='flex justify-between items-center w-full mt-[20px]'>
            <div className='flex flex-col gap-2'>
                <h1 className='font-jakarta tetx-[14px] font-[700] leading-7 tracking-[0.14px] text-[#322F37] text-start'>
                    {name}
                </h1>
                <h2 className='font-jakarta text-[12px] font-[500] leading-5 text-[#7B7584] text-start'>
                   {tag} 
                </h2>
            </div>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard
