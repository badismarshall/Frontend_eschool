import { teachers } from '../constants'

export const MeetOurTeacher = () => {
  return (
    <div className='flex w-full  justify-center items-center flex-col h-full gap-12 px-[68px]'>
      <div className='flex flex-col gap-7'>
        <div className='font-jakarta text-[42px] font-[500] leading-[58.8px] text-white'>
            Meet Our Teachers
        </div>
        <div className=' max-w-[505px] font-jakarta text-center text-[14px] font-normal leading-[28px] tracking-tight text-zinc-500'>
            Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
        </div>
      </div>
      <div className='flex  justify-center items-center w-full'>
        {
          teachers.map((teacher) => (
            <div
              key={teacher.id}
              className='flex-[1] overflow-hidden ease-linear duration-300 transition-[2s] hover:flex-[1_1_12%] relative group w-full'
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className='w-full object-cover h-[374px]'
              />
              <div className='flex flex-col justify-center absolute top-1/3 right-0 ease-linear duration-300 rotate-[270deg] bg-[#363636B2] w-[307px] h-[100px] rounded-[8px] backdrop-blur-[18px] translate-x-[300px] group-hover:translate-x-[80px]'>
                <h1 className='text-white text-lg font-bold'>{teacher.name}</h1>
                <p className='text-white'>{teacher.subject}</p>
              </div>
            </div>
          ))
        }
      </div>
{/* 
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className='flex flex-col justify-center items-center m-2'
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className='w-32 h-32 rounded-full'
              />
              <h1 className='text-white text-lg font-bold'>{teacher.name}</h1>
              <p className='text-white'>{teacher.subject}</p>
            </div>
          ))}
        </div> */}
    </div>
  )
}
