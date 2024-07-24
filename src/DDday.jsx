import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";

const DDday = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
        <div className="flex flex-wrap items-center lg:justify-center  gap-10 px-5 mt-10 mb-10 md:justify-start ">
            <div className="flex flex-col ">
                <h3 className="text-[#243568] font-extrabold">Contact Info</h3>
                <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 ">
                <CiCalendar className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold"> 31sth August, 2024</h3>
                </div>
                <div className="flex  items-center gap-2 mt-[-10px]">
                <MdAccessTime className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold">3pm (No Africa time)</h3>
                </div>
                <div className="flex  items-center gap-2 mt-[-10px]">
                <CiLocationOn className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold">Church on the Hill Event hall <br/> 5500  Alessandro Blvd Riverside,<br/> CA 92506</h3>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
               <h3 className="text-[#243568]  font-extrabold"> Party Celebration</h3>
               <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 ">
                <CiCalendar className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold"> 31st August, 2024</h3>
                </div>
                <div className="flex  items-center gap-2 mt-[-10px]">
                <MdAccessTime className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold">3pm (No Africa time)</h3>
                </div>
                <div className="flex  items-center gap-2 mt-[-10px]">
                <CiLocationOn className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold ">Church on the Hill Event hall <br/> 5500  Alessandro Blvd Riverside,<br/> CA 92506</h3>
                </div>
                </div>


            </div>
            <div className="flex flex-col gap-3 ">
            <h3 className="text-[#243568] font-extrabold"> Thanksgiving Service</h3>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 ">
                <CiCalendar className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold"> 1st September, 2024</h3>
                </div>
                <div className="flex  items-center gap-2 mt-[-10px]">
                <MdAccessTime className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold">10 a.m (No Africa time)</h3>
                </div>
                <div className="flex  items-center gap-2 mt-[-10px] ">
                <CiLocationOn className="w-[20px] h-10 text-[tomato] " />
                <h3 className="text-[15px] text-gray-500 font-bold">RCCG,Arise Church  5750 <br/>  Division street,Suite 204,<br/> Riverside,CA 92506</h3>
                </div>
                </div>
                </div>
        </div>
                <p className="flex  text-center mb-8">Please confirm your attendance by clicking this button.</p>
                <a href="https://docs.google.com/forms/d/1fPph5VlYVMeUWqBXlkXzqCC1Jlkw1wzp23TMPJWvzRg/edit" target="_blank" className="bg-[#88D4F2] text-white px-4 py-2 border-[2px] border-[#45B3DF] rounded-full">Attendance</a>
    </div>
  )
}

export default DDday
