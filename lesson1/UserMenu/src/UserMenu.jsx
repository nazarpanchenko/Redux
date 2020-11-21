import React from 'react';
import { UserContext, userData } from './user-context';

class UserMenu extends React.Component {
    render() {
        return (
            <div className="menu">
                <span className="menu__greeting">Hello, Nikola Tesla</span>
                <img
                    alt={userData.name}
                    src={userData.avatar_url}
                    className="menu__avatar"
                />
            </div>
        );
    }
}

UserContext.contextType = UserContext;

export default UserMenu;