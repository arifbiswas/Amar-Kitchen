import React from 'react';

import BannerSection from '../BannerSection/BannerSection';
import HomeShortServices from '../Services/HomeShortServices/HomeShortServices';
import SiteActivitys from '../SiteActivitys/SiteActivitys';

import './Home.css'


const Home = () => {
    return (
        <div className={``}>
            
            <div className='z-10'>
            <BannerSection />
            </div>
            <div className='z-10 my-12'>
            <HomeShortServices></HomeShortServices>
            </div>
            <div className='z-10 my-12'>
            <SiteActivitys></SiteActivitys>
            </div>
            
        </div>
    );
};

export default Home;