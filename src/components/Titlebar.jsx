import { MdOutlineArrowDropDown } from "react-icons/md";
import { add } from "../images";

const Titlebar = () => {
  return (
    <>
      <hr className="pl-72 pt-[32px]" />
      <div className="hidden md:flex justify-between items-center w-full px-[200px]">
        <ul className=" flex justify-between items-center w-[358px]">
          <li className=" text-black flex ">All Posts(32)</li>
          <li className=" text-[#8A8A8A] flex">Articles</li>
          <li className=" text-[#8A8A8A] flex">Event</li>
          <li className=" text-[#8A8A8A] flex">Education</li>
          <li className=" text-[#8A8A8A] flex">Job</li>
        </ul>

        <div className=" flex justify-around items-center h-[36px]">
          <div className=" rounded-sm bg-[#EDEEF0] h-full flex items-center mx-2 ">
            <p className=" text-black font-semibold text-[15px] p-1.5">Write a Post</p>
            <MdOutlineArrowDropDown className="h-[22px] w-[22px] " />
          </div>
          <div className=" rounded-sm bg-[#2F6CE5] h-full flex items-center mx-2 ">
            <img src={add} alt="group add" className="w-[22px] h-[22px] p-0.5"/>
            <p className=" text-white font-semibold text-[15px] p-1.5">Join Group</p>
          </div>
        </div>
      </div>
      <div className=" px-4 sm:px-12 flex md:hidden justify-between items-center ">
        <h1 className=" font-bold text-[#212529]">Posts(368)</h1>
        <div className=" flex items-center justify-around bg-[#EDEEF0]">
          <p className=" text-[#212529] px-1 font-semibold"> Filter:All</p>
          <MdOutlineArrowDropDown className="h-[20px] w-[20px] " />
        </div>
      </div>
      <div className=" hidden md:flex w-full bg-[#E0E0E0] mx-[200px] h-[1px] my-3 z-1 relative" >
        <div className=" w-[86px] absolute bg-black h-[1px] z-10"/>
      </div>
    </>
  );
};

export default Titlebar;
