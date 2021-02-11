import React  from 'react'
import '../css/dark.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react'

class DarkMode extends Component {

    render(){
        return (
                <button 
                    className={this.props.isDark ? 'dark-elements dark-mode-btn' : 'light-body dark-mode-btn'}
                    onClick ={this.props.handleDarkMode}
                >
                    <span className={this.props.isDark ? 'dark-elements' : 'light-body'}><FontAwesomeIcon icon={faMoon} /></span>
                        Dark Mode
                </button>
        )
    }
}

export default DarkMode