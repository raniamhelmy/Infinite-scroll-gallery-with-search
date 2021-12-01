import React , {useState, useEffect, useRef } from 'react'
import Heading from "../components/Heading"
import Loader from "../components/Loader"
import Images from "../components/Images"
import { useGlobalContext } from "../contexts/ImagesContext.js"
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'
import './Explore.css'

/*******Put your access key in the .env file and call it here ********/
const accessKey = process.env.REACT_APP_ACCESS_KEY;



function Explore() {
    const rootURL='https://api.unsplash.com';
    /*const searchURL='https://api.unsplash.com/search/photos'*/
    const mount= useRef(false);
    const [newImages, setNewImages] = useState(false);
    let {images, setImages,query} = useGlobalContext();

    /*let [page, setPage] = useState(1);*/
    
  

    const fetchImages = async(per_page = 30) => {
    
      let url;
      
      
        try{
          if (query) {
            setNewImages(true);
            
            
            url = `${rootURL}/search/photos?client_id=${accessKey}&query=${query}&per_page=${per_page}`;

            /*******If the page set to be used *******/
            /*url = `${rootURL}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`;
            page=page+1;
            setPage(page);
            console.log(url,page)
            /****************************************/

            /*console.log(url)*/
            const res = await axios.get(url);
            setImages([...images, ...res.data.results]);
            
           

          } else {
            /*******If you want to use /random? to avoid set page/ returns 5 images per/load *******/
            /* url =${rootURL}/photos/random?client_id=${accessKey}&count=5*/
            /**************************************************************************************/

            url = `${rootURL}/photos?client_id=${accessKey}&per_page=${per_page}`;

            /*******If the page set to be used *******/
            /*url = `${rootURL}/photos?client_id=${accessKey}&page=${page}&per_page=${per_page}`;
            page=page+1;
            setPage(page);*/
            /****************************************/


            /*console.log(url)*/
            const res = await axios.get(url);
            if(mount.current === true){images=[]; setImages(images); mount.current = false; window.scrollTo(0, 0);/*setPage(1);*/}
            setImages([...images, ...res.data]);
            setNewImages(false);
            
            /*console.log(images)*/
          }
            
        }catch(e){
            console.log('Error happened:',e);
            setNewImages(false);
        }
        
      }

      useEffect(() => {
      
        
        setTimeout(() => {
        fetchImages()}, 1500);
      
       
      },[])

      useEffect(() => {
        if (!mount.current && newImages !== false && query !== '') {
          mount.current = true
          images=[]; setImages(images);
          /* page=page+1;
            setPage(page);
          console.log(mount.current, mount)*/
        }
        
      }, [newImages,query]);


     

    return (
        <div className='explore-container'>
            <Heading/>
            <InfiniteScroll
             dataLength={images.length}
             next={fetchImages}
             hasMore={true}
             loader={<Loader />}
            >

           <Images/> 
           </InfiniteScroll>
          
        </div>
    )
}

export default Explore
