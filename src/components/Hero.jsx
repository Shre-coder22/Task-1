import {arrow, parent} from '../images'
import { useState } from 'react'

const Hero = () => {

    const [currentState,setCurrentState] = useState('Join Group') 
    const [isToggled,setIsToggled] = useState('') 

    const handleClick = () => {
        setIsToggled(!isToggled);
    
        if (isToggled) {
          setCurrentState("Leave Group");
        } else {
          setCurrentState("Join Group");
        }
      };


  return (
        <div className=' w-full h-[440px] relative '>
            <div className=' w-full h-full overflow-hidden'>
                <img src={parent} alt="hero" className='z-0 w-full h-full xl:scale-y-[2.5] lg:scale-y-[2] md:scale-y-[1.5] scale-y-125' />
            </div>
            <div className='sm:hidden flex z-10 top-[40px] left-[16px] absolute'>
                <img src={arrow} alt="arrow" className=' w-6 h-6 '/>
            </div>
            <div className='sm:hidden flex z-10 absolute w-19 h-7 top-[38px] right-[18px]  '>
                <button onClick={handleClick} className=' text-white flex items-center px-2 rounded-sm border-2 border-white'> {currentState} </button>
            </div>
            <div className='flex absolute flex-col z-10 bottom-16 xl:left-44 lg:left-36 md:left-24 sm:left-12 left-4 text-white'>
                <h1 className=' text-[16px] md:text-[36px] font-semibold'>Computer Engineering</h1>
                <p className=' text-[12px]'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
  )
}

export default Hero
