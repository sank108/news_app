import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import newsImage from "../assets/news.jpg";
import NewsCard from './NewsCard';

const Favourites = () => {
    const favouriteNews = useSelector((state) => state.news.favouriteNews);
    console.log(favouriteNews);
    const [imageSrc, setImageSrc] = useState(newsImage);

    useEffect(() => {
        async function checkImageUrl(url) {
            try {
                const response = await fetch(url, {
                    method: 'HEAD'
                });

                if (response.ok) {
                    setImageSrc(url);
                } else {
                    setImageSrc(newsImage);
                }
            } catch (error) {
                console.log(`Error checking image URL: ${url}. Error: ${error}`);
                setImageSrc(newsImage);
            }
        }

        if (favouriteNews.length > 0 && favouriteNews[0].image) {
            checkImageUrl(favouriteNews[0].image);
        }
    }, [favouriteNews]);

    function sliceTo100Words(text) {
        // Split the text by spaces to get an array of words
        let words = text.split(/\s+/);

        // Slice the first 100 words
        let first100Words = words.slice(0, 100);

        // Join the first 100 words back into a string
        let result = first100Words.join(' ');

        return result;
    }

    return (
        <div>

        {favouriteNews && favouriteNews.length > 0 ?
            
            (<div className='grid lg:grid-cols-2 xl:grid-cols-3 2xl:ml-5 justify-items-center'>
            {favouriteNews.map((newsItem, index) => (
                <div key={index}>
                    <NewsCard newsData={newsItem} isFav={false}/>
                </div>
            ))}
            </div>)
            :
            <p>No Favourites Added</p>
            
        }
        </div>
    );
}

export default Favourites;
