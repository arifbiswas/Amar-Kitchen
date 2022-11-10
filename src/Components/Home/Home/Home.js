import React from 'react';

import BannerSection from '../BannerSection/BannerSection';
import RegularCustomer from '../RegularCustomer/RegularCustomer';
import HomeShortServices from '../Services/HomeShortServices/HomeShortServices';
import SiteActivitys from '../SiteActivitys/SiteActivitys';

import './Home.css'


const Home = () => {
    return (
        <div className={``}>
            
            <div className=''>
            <BannerSection />
            </div>
            <div className=' my-12'>
            <HomeShortServices></HomeShortServices>
            </div>
            <div className=' my-12'>
            <SiteActivitys></SiteActivitys>
            </div>
            <div className='z-10 my-12'>
            <RegularCustomer></RegularCustomer>
            </div>
            
        </div>
    );
};

export default Home;