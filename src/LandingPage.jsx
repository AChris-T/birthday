import bg from "./assets/pic.png"
import over from "./assets/overlay.png"

import { useEffect, useState } from "react";


const LandingPage = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('August 31, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearTimeout(timer);
      }, [timeLeft]);
    
  return (
    <div className="max-w-[1440px] overflow-hidden mx-auto">
    <div className="w-full h-full px-4 hero md:px-0 md:pl-16 ">
        <div className="pt-10">
        <p className="txt text-[#4169e1] text-[32px] flex md:text-balance text-center"> Ayodeji Samson Anifowose</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around  mt-[82px]">
            <div className="mt-5 pix">
                <img src={bg} alt="" width={"420px"}/>

            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-[18px] font-medium text-[#3e5ebb] mt-[30px] md:mt-0">You are invited to</h3>
                <h2 className="txt text-[#4169e1] text-[42px] md:text-balance text-center">Ayodeji Samson Anifowose</h2>
                <h2 className="txt text-[#4169e1] text-[42px]">40th Birthday</h2>
                <button className="bg-[#88D4F2] text-white px-4 py-2 border-[2px] z-10 border-[#45B3DF] rounded-full">Aug 31st - Sep 01 2024</button>
            </div>
        </div>
    </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" 
            fill="#F5F5DC"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,
            4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,
            192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,
            106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,
            158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,
            52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,
            6.5z">    
         </path>
      </svg>
      <div className="flex flex-col items-center justify-center md:mx-20">
      <h2 className="txt text-[62px] text-[#3869fd] flex text-center ">You Are Invited</h2>
      <h3 className="-mt-2 text-[#5771bf] font-bold px-10 flex text-center">Join us for a fun-filled celebration as we mark a special milestone!</h3>
      <div className="inpic md:w-[100%] lg:w-[80%] w-full h-[130vh] md:h-[50%] overflow-hidden  mt-10  ">
      <img src={over} alt="" className="hidden md:flex" />
      </div>
      <div className="absolute flex-col md:flex-row flex justify-between  gap-5 lg:gap-10 mt-[230px] lg:mt-[150px] md:mt-[150px] items-center">
            <div className="bg-[#eaeaa7] w-[150px] md:w-[120px] lg:w-[150px] h-[150px] rounded-2xl flex flex-col items-center justify-center text-[#3869fd]">
            <p className="text-[40px] font-semibold">{timeLeft.days || 0}</p>
            <p>Days</p>
            </div>
            <div className="bg-[#eaeaa7]   w-[150px] md:w-[120px] lg:w-[150px] h-[150px] rounded-2xl flex flex-col items-center justify-center text-[#3869fd]">
            <p className="text-[40px] font-semibold">{timeLeft.hours || 0}</p>
            <p>Hours</p>
            </div>            

            <div className="bg-[#eaeaa7] w-[150px] md:w-[120px] lg:w-[150px] h-[150px] rounded-2xl flex flex-col items-center justify-center text-[#3869fd]">
                <p className="text-[40px] font-semibold">{timeLeft.minutes || 0}</p>
                <p>Minutes</p>
            </div>   
            <div className="bg-[#eaeaa7]  w-[150px] md:w-[120px] lg:w-[150px] h-[150px] rounded-2xl flex flex-col items-center justify-center text-[#3869fd]">
            <p className="text-[40px] font-semibold">{timeLeft.seconds || 0}</p>
            <p>Seconds</p>
            </div>     
        </div>
      
{/*         <p className="mb-10 flex text-center text-[tomato] font-extrabold ">Dress Code: Royal Blue and Beige.</p>
 */}        


      </div>
    {/*      Contact info */}
    <div>
    </div>
 
 </div>
  )
}

export default LandingPage
