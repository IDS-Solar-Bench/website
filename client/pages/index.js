import React from 'react';
import Graph from './components/Graph/Graph'
import Navbar from './components/Navbar/Navbar';
import SplashImage from './components/Splash/SplashImage';

function index() {

  return <div>
    <link href='https://fonts.googleapis.com/css?family=IBM Plex Sans Condensed' rel='stylesheet' />

    <Navbar />


    <div className='mainContent'>

      <SplashImage />

      <div className='customHeadingTextMainContent' > Short Description of Solar Bench </div>
    
      <div className="foldBlockWrapper">
        <div className="foldBlock">
          <Graph />
        </div>
      </div>
    </div>
  </div>
}

export default index