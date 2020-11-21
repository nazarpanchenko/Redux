import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
    render() {
        const { name, avatar_url } = this.props;

        return (
            <div className="menu">
                <span className="menu__greeting">Hello, Nikola Tesla</span>
                <img
                    alt={name}
                    src={avatar_url}
                    className="menu__avatar"
                />
            </div>
        );
    }
}

UserContext.contextType = UserContext;

export default UserMenu;