import React, { Component } from 'react'
import '../css/header.css'
import DarkMode from './DarkMode'

class Header extends Component {
    render() {
        return (
           <header className={this.props.isDark ? 'shadow dark-elements' : 'shadow'}>
            <div className="flex container">
            <h1>Where in the world?</h1>
                <DarkMode handleDarkMode={this.props.handleDarkMode} isDark={this.props.isDark}/>
            </div>
           </header>
        )
    }
}

export default Header