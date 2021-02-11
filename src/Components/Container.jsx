import React from 'react'
import { Component } from 'react'
import Header from './Header'
import SearchandFilter from './SearchandFilter'

class Container extends Component {

    state = {
        isDark:false || this.props.location.isDark
    }
    
    handleDarkMode = () => {
        this.setState(prevState=>{
          return  {isDark:!prevState.isDark}
        })       
    }
    
    render(){
        const body = document.body
        if(this.state.isDark){
            body.classList.add('dark-body')      
        }else{
            body.classList.remove('dark-body')
        }
        return(
            <div>
                <Header handleDarkMode={this.handleDarkMode} isDark={this.state.isDark}/>
                <SearchandFilter isDark ={this.state.isDark} handleDarkMode={this.handleDarkMode}/>
            </div>
        )
    }
}

export default Container