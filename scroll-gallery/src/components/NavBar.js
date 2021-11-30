import React from 'react'
import {Link ,useLocation} from 'react-router-dom'
import { useGlobalContext } from "../contexts/ImagesContext.js"
import './NavBar.css'
function NavBar() {
    let {setLanguage , query, setQuery} = useGlobalContext();
    let location = useLocation();
    const direct = location.pathname;
    /*console.log(direct)*/
    /*console.log(query);*/

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (!query) return;
        else{
          /*console.log('query found');*/
          
        }
      
    }
    return (
        direct !==('/') ? (<div className='navbar-container'>
            <div className='navbar-wrap'>
                <div className='navbar-left'>
                    <span className='language' onClick={()=>setLanguage('en')}>EN</span>
                   <span className='language' onClick={()=>setLanguage('sp')}>SP</span>
                    

                 </div>

                <div className='navbar-center'>
                <Link to='/' className='logo-link' onClick={()=>{window.scrollTo(0, 0)}}><h1 className='logo'>Flare</h1></Link>

                 </div>

                <div className='navbar-right'>
                <div className='search-container'>
                        <input className='input' placeholder="Search" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                        <button onClick={handleSubmit} type='submit' className='submit-button' ><i className="fas fa-search" ></i></button>
                    </div>

                    </div>

            
            
            
            
            
            
            
            
            
            
            
            
            </div>
            
            
        </div>): 
        <div className='navbar-home-container'>
        
            
            <div className='navbar-left'>
                    <Link to='/' className='logo-link' onClick={()=>{window.scrollTo(0, 0)}}><h1 className='logo'>Flare</h1></Link>

                    </div>
             <div className='navbar-home-right'>
                   <span className='language' onClick={()=>setLanguage('en')}>EN</span>
                   <span className='language' onClick={()=>setLanguage('sp')}>SP</span>
                    

    </div>
    
        </div>
    )
}

export default NavBar
