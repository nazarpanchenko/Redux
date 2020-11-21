import React from 'react';
import './index.scss';
import Header from './Header';
import { UserContext, userData } from './user-context';

class App extends React.Component {
    state = {
        userData: userData
    };

    render() {
        return (
            <div className="page">
                <UserContext.Provider value={this.state.userData}>                  
                    <Header />
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;