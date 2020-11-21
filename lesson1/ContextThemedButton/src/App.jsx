import React from 'react';
import './index.scss';
import ThemedButton from './ThemedButton';
import { themes, ThemeContext } from './themes-context';

class App extends React.Component {
    state = {
        theme: themes.light
    };

    toggleTheme = () => {
        const newTheme = 
            this.state.theme === themes.dark ? themes.light : themes.dark;

        this.setState({
            theme: newTheme
        });
    }

    render() {
        return (
            <>
                <ThemeContext.Provider value={this.state.theme}>     
                    <ThemedButton onClick={this.toggleTheme}>
                        Dynamic Theme
                    </ThemedButton>
                </ThemeContext.Provider>
                <ThemedButton onClick={this.toggleTheme}>
                    Default Theme
                </ThemedButton>
            </>
        );
    }
}

export default App;