import React from 'react'

const Pagination = ({totalPosts,setCurrentPage,currentPage}) => {
    const pages = [];

    for(let i = 1;i<=totalPosts/8;i++){
        pages.push(i);
    }

    function clickHandler(params) {
        setCurrentPage(params);
    }
  return (
    <div>
        {
            pages.map((page) => (
                <button key={page} onClick={() => clickHandler(page)}
                className={` ${page === currentPage ? "bg-amber-500" : ""} h-[50px] w-[50px] border-[1px] border-black mr-4 cursor-pointer rounded-md`}
                >{page}</button>
            ))
        }
    </div>
  )
}

export default Pagination