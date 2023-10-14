import Logo from '../assets/Logo.svg'
import PhoneLogo from '../assets/PhoneLogo.svg'
import MessageLogo from '../assets/MessageLogo.svg'
import PatternFooter from '../assets/PatternFooter.svg'
import FacebookLogo from '../assets/FacebookLogo.png'
import InstagramLogo from '../assets/InstagramLogo.png'
import LinkedinLogo from '../assets/LinkedinLogo.png'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#151318] gap-10 pb-7 mt-[120px] w-full px-[68px]'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-14 pt-16 '>
          <div className='flex flex-col gap-6 items-center md:items-start'>
            <div className='flex gap-3'>
              <img
                src={Logo}
                alt='logo'
                className='w-[38px] h-[37px] object-contain'
              />
              <div className="w-[101px] h-[32.24px]"><span className="text-white text-[28px] font-bold font-jakarta leading-[42px] tracking-tight">Sl</span><span className="text-amber-300 text-[28px] font-bold font-jakarta leading-[42px] tracking-tight">oo</span><span className="text-white text-[28px] font-bold font-jakarta leading-[42px] tracking-tight">sh</span></div>
            </div>
            <div className='flex md:max-w-[227px] font-jakarta text-[16px] font-[600] leading-7 sm:text-start'>
              Find the best way to learn new things to improve your skills
            </div>
            <div className='w-[224px] h-[2px] bg-[#322F37]'/>
            <div className='flex gap-3 items-center'>
              <img
                src={PhoneLogo}
                alt='phone'
                className='w-[24px] h-[24px] object-contain'
              />
              <div className="text-white text-base font-semibold font-jakarta leading-7">+1 738 873 90</div>
            </div>
            <div className='flex gap-3 items-center'>
              <img
                src={MessageLogo}
                alt='message'
                className='w-[24px] h-[24px] object-contain'
              />
              <div className="text-white text-base font-semibold font-jakarta leading-7">hi@slooshteam.co</div>
            </div>
          </div>
          <img
            src={PatternFooter}
            alt='pattern'
            className='w-[234px] h-[100%] object-contain xl:block hidden'
          />
          <div className='flex flex-col gap-4 md:text-start'>
              <h1 className='font-jakarta text-[16px] font-[700] leading-7'>Company</h1>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>About us</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Contact</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Podcast</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Blog</h2>
          </div>
          <div className='flex flex-col justify-start gap-4 md:text-start'>
              <h1 className='font-jakarta text-[16px] font-[700] leading-7'>Contact us</h1>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Phone</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Email</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Website</h2>
          </div>
          <div className='flex flex-col justify-start gap-4 md:text-start'>
              <h1 className='font-jakarta text-[16px] font-[700] leading-7'>Support</h1>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Terms of Condition</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>Privacy Policy</h2>
              <h2 className='font-jakarta text-[14px] font-[500] leading-7 tracking-[0.14px] text-zinc-500 hover:text-white transition ease-out duration-700'>FAQ</h2>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-jakarta text-[16px] font-[700] leading-7 md:text-start'>Find Us</h1>
            <div className='flex gap-4'>
              <img
                src={FacebookLogo}
                alt='facebook'
                className='w-[50px] h-[50px] object-contain'
              />
              <img
                src={LinkedinLogo}
                alt='Linkedin'
                className='w-[50px] h-[50px] object-contain'
              />
              <img
                src={InstagramLogo}
                alt='Instagram'
                className='w-[50px] h-[50px] object-contain'
              />
            </div>
          </div>
      </div>
      <div className='flex flex-col gap-7'>
        <div className='px-[68px]'>
          <div className='w-full h-[2px] bg-[#322F37] '/>
        </div>
        <div className='font-jakarta text-zinc-500 text-[16px] font-[500] leading-8 tracking-[0.16px]'>2022 Sloosh inc. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer