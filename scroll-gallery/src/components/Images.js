import React , {useState} from 'react'
import ImageComp from './ImageComp'
import { useGlobalContext } from "../contexts/ImagesContext.js"

import './Images.css'
function Images() {

    let {images} = useGlobalContext();
    const [imageToDisplay, setImageToDisplay] = useState("");
    const [lightBox, setLightBox] = useState(false);
    /*console.log(images)*/

    const DisplayImage = (image) => {
        /*console.log(image)*/
        setImageToDisplay(image);
        setLightBox(true);
      };
      const hideLightBox = () => {
        setLightBox(false);
      };
      const showNext = (e) => {
        e.stopPropagation();
        let obj = images.find(x => x.urls.regular === imageToDisplay);
        let currentIndex = images.indexOf(obj);
        console.log('next',currentIndex)
        /*console.log(currentIndex, imageToDisplay)*/
        if (currentIndex >= images.length - 1) {
            setLightBox(false);
        } else {
          let nextImage = images[currentIndex + 1];
          setImageToDisplay(nextImage.urls.regular);
          /*console.log('next',nextImage.urls.regular)*/
        }
      };

      const showPrev = (e) => {
        e.stopPropagation();
        //let obj = images.find(x => x.urls.regular === imageToDisplay);

        let currentIndex = images.findIndex(obj => obj.urls.regular === imageToDisplay);
        //let currentIndex = images.indexOf(obj);
        console.log('pre',currentIndex)
        if (currentIndex <= 0) {
            setLightBox(false);
        } else {
          let nextImage = images[currentIndex - 1];
          setImageToDisplay(nextImage.urls.regular);
          
        }
      };
    return (
        <div className='images-container'>
           {images.map((el,index)=>
              <ImageComp data={el} key={index} onClick={()=>DisplayImage(el.urls.regular)} />
           ) 
        }
        {
        lightBox ? 
        <div className="lightbox" onClick={hideLightBox}>
          <button className='button-navigation' onClick={showPrev}><i className="fas fa-chevron-left"></i></button>
          <div className='responsive-lightbox-img'><img className="lightbox-img" src={imageToDisplay} alt=''/></div>
          <button className='button-navigation' onClick={showNext}><i className="fas fa-chevron-right"></i></button>
        </div>
       : null
      }
         
          
        </div>
    )
}

export default Images
