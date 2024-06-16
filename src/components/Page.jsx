import { useState } from "react";
import { pages } from "../constants";
import { date, dot, eye, map, pencil } from "../images";
import { IoMdShare } from "react-icons/io";
import { image1 } from "../images";

const PageCard = ({ info }) => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(prev => !prev);
  }

  return(
  <div className=" sm:ml-[200px] flex flex-col w-full sm:w-[692px] border-2 border-gray-200 rounded-md my-2">
    {info.id<4 &&
    <img
      src={info.image}
      alt="images"
      className=" w-full h-[120px] sm:h-[220px]"
    />
    }
    <div className=" flex justify-between items-center w-[60px] h-[32px] ml-5">
      <img src={info.con} alt="iconn" className=" h-4 w-16"/>
    </div>
    <div className="flex justify-between">
      <p className=" font-bold text-[22px] ml-5 mr-1">{info.text}</p>
      <div className="flex flex-col relative">
      <img src={dot} alt="know more" className=" w-7 h-7 mr-5 cursor-pointer" onClick={handleClick} />
      {toggle && <div className="flex flex-col z-10 absolute justify-start top-6 bg-white right-4 px-3 py-2 border-2 border-gray-200 w-40 h-24">
        <p>Edit</p>
        <p>Report</p>
        <p>Option 3</p>
      </div>}
      </div>
    </div>
    {info.id<3 && <>
    <p className="hidden md:block text-[#5C5C5C] ml-5">
      I've worked in UX for the better part of a decade. From now on, I plan to
      rei...
    </p>
    <p className="block md:hidden text-[#5C5C5C] ml-5">
      I've worked in UX for the better part of a decade. F..
    </p>
      </>
    }

    {
      info.id>2 &&
      <>
        <div className="flex items-center ml-5 text-[#212529]">
          <div className="flex justify-around items-center">
            <img src={info.symbol1} alt="today" className="w-5 h-5 pr-1"/>
            <span className="hidden sm:inline">{info.work2}</span>
            <span className="inline sm:hidden">{info.work1}</span>
          </div>
          <div className="flex justify-around items-center ml-12">
          <img src={info.symbol2} alt="today" className="w-5 h-5"/>
          <p>{info.location}</p>
          </div>
        </div>
        {info.id>3 &&
        <div className="flex justify-center items-center rounded-lg sm:mx-5 mx-4 mt-2 w-[96%] h-9 text-[#02B875] font-semibold border-2 border-gray-200">
          {info.link}
        </div>
        }
        {info.id<4 &&
        <div className="flex justify-center items-center rounded-lg sm:mx-5 mx-4 mt-2 w-[96%] h-9 text-[#E56135] font-semibold border-2 border-gray-200">
          {info.link}
        </div>
        }
      </>
    }

    <div className="hidden sm:flex my-6 items-center justify-between">
      <div className="flex items-center ">
        <img
          src={info.icon}
          alt="dp"
          className=" ml-5 rounded-full w-[37px] h-[37px] sm:w-[48px] sm:h-[48px] "
        />
        <h2 className=" font-bold pl-2">{info.name}</h2>
      </div>
      <div className="flex items-center mr-5">
        <div className="flex items-center mr-3">
          <img src={eye} className="w-[18px] h-[18px] mr-2" />
          <p className="text-[14px] text-[#525252] font-semibold">1.4k views</p>
        </div>
        <div className=" w-[42px] h-9 flex justify-center items-center bg-[#EDEEF0]">
          <IoMdShare className=" w-[18px] h-[18px]" />
        </div>
      </div>
    </div>
    <div className="flex sm:hidden my-6 items-center justify-between">
      <div className="flex items-center ">
        <img
          src={info.icon}
          alt="dp"
          className=" ml-5 rounded-full w-[37px] h-[37px] sm:w-[48px] sm:h-[48px] "
        />
        <div>
        <h2 className=" font-bold pl-2">{info.name}</h2>
        <p className="text-[14px] text-[#525252] font-semibold pl-2">{info.views}</p>
        </div>
      </div>
      <div className="flex items-center mr-5">
        <div className=" w-[80px] h-10 mx-2 flex justify-center items-center bg-[#EDEEF0]">
          <IoMdShare className=" w-[18px] h-[18px] mr-1" />
          <p>Share</p>
        </div>
      </div>
    </div>
  </div>
  )
}


const Page = () => {
  return (
  <>
  <div className="flex">
    <div className="flex flex-col">
      {pages.map((info, index) => (
        <PageCard key={index} info={info} />
      ))}
    </div>
    <div className="hidden md:flex flex-col ml-36 mt-14">
      <div className=" flex w-[243px] border-2 border-b-gray-200 font-semibold">
        <img src={map} alt="map" className="mx-2 w-8"/>
        <p>Noida,India</p>
        <img src={pencil} alt="no" className="mx-24"/>
      </div>
      <div className="text-black opacity-50 w-[220px] mt-8">
        <p className="text-[12px]">Your location will help us serve better and extend a personalised experience.</p>
      </div>
    </div>
  </div>
  </>
  );
};

export default Page;
