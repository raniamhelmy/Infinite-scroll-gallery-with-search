import React , {useState, useEffect, useRef } from 'react'
import Heading from "../components/Heading"
import Loader from "../components/Loader"
import {useLocation} from 'react-router-dom'
import Images from "../components/Images"
import { useGlobalContext } from "../contexts/ImagesContext.js"
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios'
import './Explore.css'

const accessKey = process.env.REACT_APP_ACCESS_KEY;



function Explore() {
    const rootURL='https://api.unsplash.com';
    const searchURL='https://api.unsplash.com/search/photos'
    const mount= useRef(false);
    const [newImages, setNewImages] = useState(false);
    /*let location = useLocation();*/
    let {images, setImages,query} = useGlobalContext();

    /*let [page, setPage] = useState(1);*/
    
  

    const fetchImages = async(per_page = 30) => {
      //random?
      let url;
      /*if (query) {
        url = `${rootURL}/search/photos?client_id=${accessKey}&query=${query}&per_page=20`;
      } else {
        url = `${rootURL}/photos?client_id=${accessKey}&count=${count}`;
      }*/
      
        try{
          if (query) {
            setNewImages(true);
            /*window.location.reload();*/
            
            url = `${rootURL}/search/photos?client_id=${accessKey}&query=${query}&per_page=${per_page}`;
            //url = `${rootURL}/search/photos?client_id=${accessKey}&query=${query}&page=${page}`;
          
            /*setPage(page+1);
            console.log(url,page)*/
            /*console.log(url)*/
            const res = await axios.get(url);
            
            /*console.log('siu',images);
            console.log('here is the res',res.data.results);*/
            setImages([...images, ...res.data.results]);
            
           

          } else {
            /////random?
            /*${rootURL}/photos/random?client_id=${accessKey}&count=5*/
            url = `${rootURL}/photos?client_id=${accessKey}&per_page=${per_page}`;
            /*url = `${rootURL}/photos?client_id=${accessKey}&page=${page}&per_page=${per_page}`;
            page=page+1;
            setPage(page);
            console.log(url,page)*/
            /*console.log(url)*/
            const res = await axios.get(url)
            /*console.log('here is the res',res.data);*/
            if(mount.current === true){images=[]; setImages(images); mount.current = false; window.scrollTo(0, 0);/*setPage(1);*/}
            setImages([...images, ...res.data]);
            setNewImages(false);
            
            /*console.log(images)*/
          }
            /*const res = await axios.get(`${rootURL}/photos?client_id=${accessKey}&count=${count}`)
            setNewImages(false);*/
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
          /*console.log(mount.current, mount)*/
        }
        /*if (!mount.current) {
          mount.current = true;
          console.log(mount.current)
          return;
        }
        if (newImages) return;*/
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [newImages,query]);


     

    return (
        <div className='explore-container'>
            <Heading/>
            {/*<Loader />*/}
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
