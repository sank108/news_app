import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import newsImage from "../assets/news.jpg"

const FullInformation = () => {

  const location = useLocation();
  console.log(location);
  const newsData = location.state?.newsData;
  console.log(newsData);

  const [imageSrc, setImageSrc] = useState(newsImage);
  const [valid,setValid] = useState(false);

  useEffect(() => {
    async function checkImageUrl(url) {
      try {
        const response = await fetch(url, {
          method: 'HEAD'
        });

        if (response.ok) {
          setImageSrc(url);
          setValid(true);
        } else {
          setImageSrc(newsImage);
          setValid(false);
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

  console.log(window.innerWidth);

  function sliceTo100Words(text,length) {
    // Split the text by spaces to get an array of words
    let words = text.split(/\s+/);
    
    // Slice the first 100 words
    let first100Words = words.slice(0, length);
    
    // Join the first 100 words back into a string
    let result = first100Words.join(' ');
    
    return result;
  }
  return (
    <div>
      <img src={imageSrc} alt='news' className={` ${valid ? "2xl:h-[400px] w-[98%]" : "h-[300px] w-[95%]"}  ml-[10px]`} />

      <h3 className='font-bold text-xl'>
        {newsData.title}
      </h3>

      <p className='text-justify w-[90%] lg:w-[95%] 2xl:w-[98%] ml-4'>{window.innerWidth <=425 ?  sliceTo100Words(newsData.text,300) : sliceTo100Words(newsData.text,1000)}</p>

      <p className='text-left ml-4 lg:text-right lg:mr-4 xl:mr-6 2xl:mr-3'><span className='font-bold'>Author : </span>{newsData.author}</p>
      <p className='text-left ml-4 lg:text-right lg:mr-4 xl:mr-6 2xl:mr-3'><span className='font-bold'>Publish-date : </span>{newsData.publish_date}</p>
    </div>
  )
}

export default FullInformation