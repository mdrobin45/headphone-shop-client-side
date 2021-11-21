import React from 'react';
import AverageHeadphone from './AverageHeadphone/AverageHeadphone';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeShop from './HomeShop/HomeShop';
import QualityHeadphone from './QualityHeadphone/QualityHeadphone';
import Testimonial from './Testimonial/Testimonial';
import WorldclassBanner from './WorldclassBanner/WorldclassBanner';

const Home = () =>
{
    return (
        <div>
            <HomeBanner />
            <QualityHeadphone />
            <AverageHeadphone />
            <HomeShop />
            <WorldclassBanner />
            <Testimonial/>
        </div>
    );
};

export default Home;