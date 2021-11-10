import React from 'react';
import AverageHeadphone from './AverageHeadphone/AverageHeadphone';
import HomeBanner from './HomeBanner/HomeBanner';
import QualityHeadphone from './QualityHeadphone/QualityHeadphone';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <QualityHeadphone />
            <AverageHeadphone/>
        </div>
    );
};

export default Home;