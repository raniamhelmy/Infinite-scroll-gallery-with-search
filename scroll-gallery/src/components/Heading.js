import React from 'react'
import './Heading.css'
import { useGlobalContext } from "../contexts/ImagesContext.js"
function Heading() {
    let {language} = useGlobalContext();
    return (
        <div className='heading-container'>
            <h2 className='heading-title'>{language ==='en'? 'Creating Quality Photos' : 'CREANDO FOTOS DE CALIDAD'}</h2>
            <p className='heading-desc'>{language ==='en'? "A photo can reveal more about a person than you might have thought. Just like looking in the eyes, photography can reveal your soul. What's more, a picture can bear different meanings" : 'Una foto puede revelar más sobre una persona de lo que pensaba. Al igual que mirar a los ojos, la fotografía puede revelar tu alma. Además, una imagen puede tener diferentes significados'}</p>
        </div>
    )
}

export default Heading
