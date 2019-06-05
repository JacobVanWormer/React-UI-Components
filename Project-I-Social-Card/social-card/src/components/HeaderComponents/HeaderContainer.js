import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import Title from './HeaderTitle';
import Thumbnail from './ImageThumbnail';

function HeaderContainer() {
    return (
        <div className="header-container">
            <Thumbnail />
            <Title />

        </div>

    );
}

export default HeaderContainer;
