import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Thumbnnail from './components/HeaderComponents/ImageThumbnail';
import Title from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContainer from './components/CardComponents/CardContainer';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';

const App = () => {
  return (

    <div className="container">
      {/* header */}
      <HeaderContainer />
      <Thumbnnail />
      <Title />
      <HeaderContent />
      {/* card container */}
      <CardContainer />
      <CardBanner />
      <CardContent />


    </div>

  );
};

export default App;
