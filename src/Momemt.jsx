import { Gallery } from "react-grid-gallery";

const images = [
  {
     src: "../src/assets/BBT/1.JPG",
     width: 320,
     height: 174,
     isSelected: true,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
     width: 320,
     height: 212,
     tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
     ],
     alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 320,
     height: 212,
  },
];


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
        <div className="flex flex-col justify-center items-center text-center">
        <h2 className="txt text-[45px] font-extrabold text-[#3869fd] ">Birthday Moment</h2>

        <Gallery images={images} />
        <img src="./../src/assets/BBT/1.JPG" alt="" width={"300px"}/>

        </div>
    </div>
  )
}

export default Momemt
