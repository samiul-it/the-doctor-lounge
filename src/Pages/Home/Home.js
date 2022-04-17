import React from 'react';
import Banner from './Banner/Banner';
import Description from './Description/Description';
import './Home.css';
import Services from './Services/Services';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services/>
        <Description></Description>
      </div>
    );
};

export default Home;