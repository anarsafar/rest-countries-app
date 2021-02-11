import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../css/search.css'
import Countries from './Countries'
import Country from './Country'
import SelectFilter from './SelectFilter'
import { Link } from 'react-router-dom'

class SearchandFilter extends Component {

    state={
        searchCountry:'',
        responseCountry:[],
        responseFilter:[]
    }

    handleChange=(event)=>{
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
        this.handleSubmit(event)
    }

    handleSubmit =(e)=>{
        const {searchCountry} = this.state
        fetch(`https://restcountries.eu/rest/v2/name/${searchCountry}`)
        .then(response=>response.json())
        .then(response=>this.setState({responseCountry:response}))
        .catch(err=>console.log(err))
        e.preventDefault()
    }

    handleCallback = (childData) => {
        this.setState({responseFilter: childData})
    }

    render() {
        const {searchCountry,responseCountry,responseFilter} = this.state
        // console.table("Filter: "+ responseFilter.length)
        // console.table('Src: ' + responseCountry.length)
        const filter =  
            <div className='container countries-container'>
                {responseFilter.map((x,y)=><Link to={{pathname:"/DetailedCountry", info:x,isDark:this.props.isDark,handleDarkMode:this.props.handleDarkMode}} key={y} className="link"><Country data={x} isDark = {this.props.isDark}/></Link>)} 
            </div>   
        const src =  
            <div className='container countries-container'>
                {responseCountry.status===404 ? <div className="err">Enter correct country name</div>: responseCountry.map((x,y)=><Link to={{pathname:"/DetailedCountry", info:x,isDark:this.props.isDark,handleDarkMode:this.props.handleDarkMode}} key={y} className="link"><Country data={x} isDark={this.props.isDark}/></Link>)}
            </div>   
        return (
            <div className='form container'>
                <form className="flex" onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className={this.props.isDark ? "input shadow dark-elements" : 'input shadow'}>
                        <span className={this.props.isDark ? 'dark-elements' : "span"}><FontAwesomeIcon icon={faSearch} /></span>
                        <input 
                            type="text"
                            name="searchCountry"
                            onChange={(event)=>this.handleChange(event)}
                            value={this.state.searchCountry}
                            placeholder="Search for a country..."
                            className={this.props.isDark ? "dark-elements dark-input" : 'none'}
                        />
                    </div>
                    <SelectFilter parentCallback = {this.handleCallback} isDark={this.props.isDark}/>
                </form>
                {
                 responseFilter.length===0 && searchCountry.length===0 ? <Countries isDark={this.props.isDark} handleDarkMode = {this.props.handleDarkMode}/> :
                 searchCountry.length===0 ?  filter : src
                }
            </div>
        )
    }
}

export default SearchandFilter