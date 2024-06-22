import React from 'react'
import newsImage from "../assets/news.jpg"
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../features/news_app/newsSlice';
import toast from 'react-hot-toast';

const NewsCard = ({newsData,isFav}) => {

  const [imageSrc, setImageSrc] = useState(newsImage);
  const [validImageSrc,setValidImageSrc] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkImageUrl(url) {
      try {
        const response = await fetch(url, {
          method: 'HEAD'
        });

        if (response.ok) {
          setImageSrc(url);
          setValidImageSrc(true);
        } else {
          setImageSrc(newsImage);
          setValidImageSrc(false);
        }
      } catch (error) {
        console.log(`Error checking image URL: ${url}. Error: ${error}`);
        setImageSrc(newsImage);
      }
    }

    if (newsData.image) {
      checkImageUrl(newsData.image);
    }
  }, [newsData.image]);
  function sliceTo100Words(text) {
    // Split the text by spaces to get an array of words
    let words = text.split(/\s+/);
    
    // Slice the first 100 words
    let first100Words = words.slice(0, 100);
    
    // Join the first 100 words back into a string
    let result = first100Words.join(' ');
    
    return result;
  }

  function favouriteClickHandler(params) {
    dispatch(addFavourite(newsData));
    toast.success("Added to Favourites");
  }
  return (
    <div className='mt-2 w-[95%] h-auto mb-4
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] break-words
    
    '>
        <div>
          <img src={imageSrc} alt='Headline-img' loading='eager'
          className={` ${validImageSrc ? "w-[95%]" : "w-[300px]" } h-[150px]  mx-auto`}
          />
          <h3 className='mt-2 h-[60px] font-bold'>{newsData.title}</h3>

          <p className='mt-2 h-[430px] 2xl:h-[360px] mb-4'>{sliceTo100Words(newsData.text)}...</p>

          <div className='flex flex-col items-center self-auto mt-auto'>
            <Link to="/full-information" state={{newsData:newsData}}>
              <button className={`${isFav ? " ": "mb-2"} h-[40px] w-[150px] border-2 border-black rounded-md min-[1024px]:hover:bg-slate-900 min-[1024px]:hover:text-white
              font-semibold mt-2
              `}>Read More</button>
            </Link>


            {isFav &&
              <button className='h-[40px] w-[150px] border-2 border-black rounded-md min-[1024px]:hover:bg-slate-900 min-[1024px]:hover:text-white
              font-semibold mt-2 mb-2
              ' onClick={favouriteClickHandler}>Add Favourite
            </button>}
          </div>
          
        </div>
    </div>
  )
}

export default NewsCard