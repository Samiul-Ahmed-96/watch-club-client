import React from 'react';
import Banner from '../Banner/Banner';
import ExploreFeature from '../ExploreFeature/ExploreFeature';
import HomeReviews from '../HomeReviews/HomeReviews';
import HomeWatches from '../HomeWatches/HomeWatches';

const Home = () => {
    return (
        <>
            <Banner/>
            <ExploreFeature/>
            <HomeWatches/>
            <HomeReviews/>
        </>
    );
};

export default Home;