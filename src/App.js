import { Route, Routes } from 'react-router-dom';
import './App.css';
import FullInformation from './components/FullInformation';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Favourites from './components/Favourites';

function App() {
  const [query, setQuery] = useState('');
  const [requestType, setRequestType] = useState('general');

  
  return (
    <div className="App">
      
      <Navbar setQuery={setQuery} setRequestType={setRequestType} />

      <Routes>
        <Route path='/' element={<Home query={query} requestType={requestType}/>}/>
        <Route path='/full-information' element={<FullInformation/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
