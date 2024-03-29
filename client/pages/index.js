import React from 'react';
import Graph from './components/Graph/Graph'
import Navbar from './components/Navbar/Navbar';
import SplashImage from './components/Splash/SplashImage';
import Stats from './components/Stats/Stats';
import IconStatComponent from './components/IconStatComponent/IconStatComponent'
import Description from './components/Description/Description';
import MeetTeam from './components/MeetTeam/MeetTeam';

function index() {

  return <div>
    <link href='https://fonts.googleapis.com/css?family=IBM Plex Sans Condensed' rel='stylesheet' />

    <Navbar />

    <SplashImage />

    

    <div className='mainContent'>


      <Stats wattage={250} />

      <div className='statsSeparator' />

      <div className="foldBlockWrapper">
          <div className="foldBlock">
            <IconStatComponent />
          </div>
      </div>


      <div className='graphWrapper'>
        <div className="foldBlockWrapper">
          <div className="foldBlock">
            <Graph />
          </div>
        </div>
      </div>

      <Description />

      <div className="foldBlockWrapper">
        <div className="foldBlock">
          <MeetTeam />
        </div>
      </div>

    
    </div>
  </div>
}

export default index