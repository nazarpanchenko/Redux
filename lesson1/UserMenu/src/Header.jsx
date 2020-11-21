import React from 'react';
import UserMenu from './UserMenu';

export const Header = () => {
    return (
        <header className="header">
           <UserMenu />
        </header>
    );
}

export default Header;