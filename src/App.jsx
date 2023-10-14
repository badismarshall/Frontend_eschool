import { useState } from 'react'
import { MeetOurTeacher } from './components/MeetOurTeacher'
import Footer from './components/Footer'
import { Testimonials } from './components/Testimonials'
function App() {

  return (
      <div className='flex flex-col w-full'>
        <Testimonials/>
        <MeetOurTeacher/>
        <Footer/>
      </div>
  )
}

export default App
