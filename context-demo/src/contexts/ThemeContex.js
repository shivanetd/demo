import React, { Component, createContext } from 'react';



export const ThemeContex = createContext();

export default class ThemeContexProvider extends Component {

    state = {
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    }

    toggleTheme = ()=> {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    render() {
        return (
            <ThemeContex.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContex.Provider>
        )
    }
}
