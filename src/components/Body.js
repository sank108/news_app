import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import Spinner from './Spinner';
import Pagination from './Pagination';

const API_KEY = "8da49ec4dfda459f9e8bb62b097aa7ea";

const Body = ({requestType,query}) => {

    const [currentPage,setCurrentPage] = useState(1);
    

    const getFormattedDate = () => {
        const date = new Date(); // Get the current date

        const year = date.getFullYear(); // Get the year (e.g., 2024)
        let month = (date.getMonth() + 1).toString(); // Get the month (0-11), add 1 and convert to string
        let day = date.getDate().toString(); // Get the day of the month (1-31) and convert to string

        // Add leading zeros if necessary
        month = month.length < 2 ? '0' + month : month;
        day = day.length < 2 ? '0' + day : day;

        return `${year}-${month}-${day}`; // Construct the formatted date
    };
    
    const [data,setData] = useState([]);
        useEffect(() => {
            setData([]);
            console.log('Fetching data with:', { requestType, query });
            
            // Log to verify effect runs
            var searchType = query && query.length > 0 ? query : requestType;

            async function getNewsData() {
                try {
                const response = await axios.get(`https://api.worldnewsapi.com/search-news?text=${searchType}&country=in&language=en&date=${getFormattedDate()}&number=30&api-key=${API_KEY}`);
                console.log(response);
                setData(response.data.news);
                } catch (error) {
                console.error('Error fetching news data:', error);
                }
            }

            getNewsData();

            function goToTop() {
                window.scrollTo({top:0,left:0,behavior:"smooth"});
            }

            goToTop();
        }, [requestType,query,currentPage]);

        
        var lastIndex = currentPage * 8;
        var firstIndex = lastIndex - 8;

        if(lastIndex > data.length){
            lastIndex = data.length-1;
        }
        const news = data.slice(firstIndex,lastIndex);
        
  
     
  return (
    <div>
        
        {data && data.length > 0 ? 
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center'>
                {
                    news.map((newsData) => (
                        <NewsCard key={newsData.id} newsData={newsData} isFav={true}/>
                    ))
                }
            </div>
                :
            <div className='h-screen flex justify-center items-center '>
                <Spinner/>
            </div>
            

        }

        <Pagination totalPosts={data.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        
    </div>
  )
}

export default Body