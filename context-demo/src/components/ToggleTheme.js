import React, { Component } from 'react'
import { ThemeContex } from '../contexts/ThemeContex'

export default class ToggleTheme extends Component {
    static contextType = ThemeContex;
    render() {
        const {toggleTheme} = this.context;
        return (
            <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        )
    }
}
