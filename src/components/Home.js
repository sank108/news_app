import React, { useState } from 'react';
import Body from './Body';

const Home = ({query,requestType}) => {

  return (
    <div>
      
      <Body requestType={requestType} query={query} />
    </div>
  );
};

export default Home;
