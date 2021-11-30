import React  from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from "../contexts/ImagesContext.js"
import './Home.css'

function Home() {
    let {language} = useGlobalContext();
    return (<>
        <div className='home-container'>
            <div className='home-container-wrap'>
                {language ==='en'? (<h1 className='home-container-title'>See the world through the eyes of a <span className='home-span'>photographer</span></h1>):(<h1 className='home-container-title'>Vea el mundo a través de los ojos de un <span className='home-span'>fotógrafo</span></h1>)}
                <Link to ='/explore' className='link'><button type='submit' className='home-button'>{language ==='en'? 'Explore' : 'Explorar' }</button></Link>
                </div>
                <footer className="footer">
                <p className="footer-desc">&copy; Flare Gallery 2018</p>
       </footer>
                
        </div>
       
   </> )
}

export default Home
