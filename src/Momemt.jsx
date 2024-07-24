import img1 from "../src/assets/1.png"
import img2 from "../src/assets/13.png"
import img3 from "../src/assets/3.png"
import img4 from "../src/assets/4.png"
import img5 from "../src/assets/5.png"
import img6 from "../src/assets/6.png"
import img7 from "../src/assets/7.png"
import img8 from "../src/assets/8.png"
import img9 from "../src/assets/9.png"
import img10 from "../src/assets/10.png"
import img11 from "../src/assets/11.png"
import img12 from "../src/assets/12.png"
import img13 from "../src/assets/13.png"



const Momemt = () => {
  return (
    <div className="bg-[#F5F5DC] mt-[100px]">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" 
            fill="white"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,
            4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,
            192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,
            106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,
            158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,
            52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,
            6.5z">    
         </path>
      </svg>
        <div className="flex flex-col items-center justify-center mb-16 text-center md:mx-24">
        <h2 className="txt text-[45px] font-extrabold text-[#3869fd] mb-10">Birthday Moment</h2>
      <div className='grid grid-cols-2 gap-4 mx-5 lg:grid-cols-4 md:grid-cols-3'>     

         <img src={img1} alt="img"/>
         <img src={img2} alt="img"/>
         <img src={img3} alt="img"/>
         <img src={img4} alt="img"/>
         <img src={img5} alt="img"/>
         <img src={img6} alt="img"/>
         <img src={img7} alt="img"/>
         <img src={img8} alt="img"/>
         <img src={img9} alt="img"/>
         <img src={img10} alt="img"/>
         <img src={img11} alt="img"/>
         <img src={img12} alt="img"/>
         <img src={img13} alt="img"/>


    </div>

        </div>
    </div>
  )
}

export default Momemt
