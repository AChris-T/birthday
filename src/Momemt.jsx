import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const images = [
   {src:"../public/1.JPG", alt:"1"},
   {src:"/public/2.JPG", alt:"1"},
   {src:"/public/3.JPG", alt:"1"},
   {src:"/public/4.JPG", alt:"1"},
   {src:"/public/5.JPG", alt:"1"},
   {src:"/public/7.JPG", alt:"1"},
   {src:"/public/8.JPG", alt:"1"},
   {scr:"/public/9.JPG", alt:"1"},
   {src:"/public/10.JPG", alt:"1"},
   {src:"/public/11.JPG", alt:"1"},
   {src:"/public/12.JPG", alt:"1"},
   {src:"/public/13.JPG", alt:"1"},
   {src:"/public/14.JPG", alt:"1"},
   {src:"/public/15.JPG", alt:"1"},
   {src:"/public/16.JPG", alt:"1"},
   {src:"/public/17.JPG", alt:"1"}


]
const Momemt = () => {
   const onInit = () => {
      console.log('lightGallery has been initialized');
  };
 
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
        <div className="flex flex-col items-center justify-center text-center mx-36">
        <h2 className="txt text-[45px] font-extrabold text-[#3869fd] ">Birthday Moment</h2>

        <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        className="gallery-item"

    >
    {images.map((image,index)=>{
      return(
         <a href={image.src} key={index}>
         <img src={image.src} alt={images.alt}/>
         </a>
      )
    })}
    </LightGallery>      
        </div>
    </div>
  )
}

export default Momemt
