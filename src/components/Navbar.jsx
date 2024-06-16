import { union,search} from '../images'
import { IoMdArrowDropdown } from "react-icons/io";
import SignIn from './SignIn';

const Navbar = () => {
  return (
    <div className='hidden w-full h-[72px] sm:flex justify-around items-center'>
        <div className='flex py-[24px] text-center h-full '>
            <div className='flex h-[21.7px]'>
                <h1 className='flex items-center text-[21.7px] align-middle px-[2px] text-[#27a365]'> ATG </h1>
                <p className='flex items-end text-[3.68px] px-[0.5px] text-[#27a365]'>0</p>
                <h1 className=' flex items-center text-[21.7px] text-[#5c5d5d] '>W</h1>
            </div>
            <div className='flex h-[21.7px]'>
            <img src={union} alt="Union 1" className='px-[0.5px] flex items-center py-0.5 align-middle'/>
            <h1 className='flex items-center text-[21.7px] px-[1px] text-[#5c5d5d]'>RLD</h1>
            </div>
        </div>
        <div className=' hidden md:flex items-center h-full'>
            <div className='h-[42px] flex items-center rounded-[50px] bg-[#F2F2F2] md:w-[360px]'>
                <div className=' px-[14px]'>
                <img src={search} alt="search" className='h-[24px] w-[24px] ' />
                </div>
                <p className='text-[#5C5C5C] text-[14px] font-semibold'>Search for your favourite groups in ATG</p>
            </div>
        </div>
        <div className='flex text-center h-full '>
            <div className='flex items-center align-middle'>
                <p className='text-[#2E2E2E] text-[16px] font-semibold  '>Create account.</p> 
                <span className='text-[16px] font-semibold text-[#2F6CE5]'> It's free!</span>
                <IoMdArrowDropdown className='w-[24px] h-[24px] cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Navbar
