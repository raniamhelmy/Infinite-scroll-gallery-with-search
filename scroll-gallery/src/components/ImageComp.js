import React from 'react'
import './ImageComp.css'
import { useGlobalContext } from "../contexts/ImagesContext.js"

function ImageComp({data, onClick}) {
    /*console.log(data)*/
    let {language} = useGlobalContext();
    return (
        <div className='imagecomp-container' onClick={onClick}>
            <div className='image-wrap'>

                <img className='image-image' src={data.urls.regular} alt=''/>

            </div>
            <div className="caption">
                <div className='caption-wrap'>
                <div className='caption-data'>
                   <a className='owner-link' target='_blank' href={data.user.links.html} rel="noreferrer"><p className='image-owner'>{data.user.name}</p></a> 
                     <p className="image-data"> <span className='location'>{language === 'en' ?'Location: ': 'Localización: ' }<small>{data.user.location}</small> </span> <span  className='likes'>{language === 'en' ?'Likes: ': 'Gustos: ' } <small>{data.likes}</small> </span></p>
                

                </div>
              <img className='image-pic-owner' src={data.user.profile_image.medium} alt=''/>
              </div>
            </div>
            
        </div>
    )
}

export default ImageComp
