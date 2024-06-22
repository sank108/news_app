import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logo from "../assets/Logo.png";
import { VscThreeBars } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleXmark } from "react-icons/fa6";
import { useNavigate,Link } from 'react-router-dom';

const Navbar = ({ setQuery, setRequestType }) => {
  

  const [sidebarClicked, setSidebarClicked] = useState(true);
  const [temp, setTemp] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  function sidebarClickHandler() {
    setSidebarClicked(!sidebarClicked);
  }

  function changeHandler(e) {
    var value = e.target.value;
    setTemp(value);
  }

  function queryHandler() {
    setQuery(temp);
    if (inputRef.current) {
      inputRef.current.value = '';
      setTemp(''); // Clear the input field
      setRequestType("");
    }
    navigate('/')
  }

  function crossHandler() {
    setSidebarClicked(!sidebarClicked);
  }

  function requestTypeHandler(type) {
    setQuery(''); // Example of using setQuery
    setRequestType(type); // Example of using setRequestType
    setSidebarClicked(!sidebarClicked);
    navigate('/');
  }

  //xs:ml-[-120px] sm:ml-[-150px] md:ml-[-170px] lg:ml-[-350px]  md:ml-[150px]  lg:ml-[200px]

  return (
    <div>
      <div className='2xl:flex xl:border-b-[1px] border-slate-600'>
        
      <div className='flex items-center border-b-[1px] xl:border-b-0 border-slate-600 mt-2 h-[60px] p-2 relative'>
        <VscThreeBars 
          onClick={sidebarClickHandler}
          className='text-3xl xl:hidden'
          />
        <div className='flex items-center'>

          <Link to='/'>
            <img src={logo}
              alt='logo' loading='lazy' 
              className='min-[320px]:h-[50px] min-[375px]:h-[50px] md:h-[50px] min-[768]:h-[60px] 
              min-[320px]:max-[425px]:w-[60px] ml-[100px] sm:ml-[120px] md:ml-[150px] lg:ml-[320px]
              xl:ml-4
              '
              />
          </Link>

          <div className='hidden xl:block'>
            <ul className='flex gap-7 ml-5'>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("general")}>
              General
            </li>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("business")}>
              Business
            </li>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("entertainment")}>
              Entertainment
            </li>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("health")}>
              Health
            </li>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("science")}>
              Science
            </li>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("sports")}>
              Sports
            </li>
            <li className='text-xl font-semibold h-[40px] pt-1 cursor-pointer' onClick={() => requestTypeHandler("technology")}>
              Technology
            </li>

            <Link to="/favourites">
              <li className='text-xl font-semibold h-[40px] pt-1'>
                Favourites
              </li>
            </Link>
          </ul>
          </div>
        </div>
      </div>
      <div className='flex ml-2 items-center mt-2'>
        <input 
          type='text'
          ref={inputRef}
          className='border-[1px] border-black w-[93%] h-[40px] p-2 mb-2
          xl:ml-2 xl:w-[96%] 2xl:w-[500px]
          '
          placeholder="Enter the news you want to search"
          value={temp}
          onChange={changeHandler}
          />
        <IoSearchSharp className='text-3xl' onClick={queryHandler}/>
      </div>
      </div>
      <div className={` ${sidebarClicked ? "ml-[-200px]" : ""} xl:hidden text-left absolute bg-white mt-[-123px] border-2 border-black h-[320px] w-[200px] transition-all duration-500`}>
        <div className=''>
          <ul>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("general")}>
              General
            </li>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("business")}>
              Business
            </li>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("entertainment")}>
              Entertainment
            </li>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("health")}>
              Health
            </li>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("science")}>
              Science
            </li>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("sports")}>
              Sports
            </li>
            <li className='text-xl font-semibold border-b-[1px] border-slate-600 h-[40px] pt-1' onClick={() => requestTypeHandler("technology")}>
              Technology
            </li>

            <Link to="/favourites">
              <li className='text-xl font-semibold h-[40px] pt-1'>
                Favourites
              </li>
            </Link>
          </ul>
          <FaRegCircleXmark className={`${sidebarClicked ? "ml-[-200px]" : "ml-[203px]"} text-xl mt-[-320px]`} onClick={crossHandler}/>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setRequestType: PropTypes.func.isRequired,
};

Navbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  setRequestType: PropTypes.func.isRequired,
};

export default Navbar;
