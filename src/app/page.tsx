

import CarRecommendationPag from '@/components/CarRecommendationPage';
import Hero from '@/components/Hero';

import React from 'react';
import Filter from '@/components/Filter';

import About from '@/components/About';

const page = () => {
  return (
    <div>
     
      <Hero/>
    

      <Filter/>
      {/* <PopularCarPage/> */}
      <CarRecommendationPag/>
      <About/>
     
     
      {/* <AnalyticsDashboard/> */}
      {/* <UserProfile/> */}
     
      {/* <OrderTracking/> */}
      {/* <Datafetch/> */}
      
     
    </div>
  );
}

export default page;