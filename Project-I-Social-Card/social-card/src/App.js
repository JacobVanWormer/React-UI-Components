import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Thumbnnail from './components/HeaderComponents/ImageThumbnail';
import Title from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';

const App = () => {
  return (

    <div className="container">
      <HeaderContainer />
      <Thumbnnail />
      <Title />
      <HeaderContent />
    </div>

  );
};

export default App;
