import React, { Component } from 'react'
import Country from './Country'
import '../css/country.css'
import {Link} from 'react-router-dom'

class Countries extends Component {
    state={
        countries:[]
    }
    componentDidMount() {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response=>response.json())
            .then(response=>this.setState({
                countries:response
            }))
            .catch(err=>console.log(err))
    }
    render() {
        const ui = this.state.countries.map((item,i)=><Link to={{pathname:"/DetailedCountry", info:item,isDark:this.props.isDark,handleDarkMode:this.props.handleDarkMode}} key={i} className="link"><Country data={item} isDark={this.props.isDark}/></Link>)
        return (
            <div className="container countries-container">
                {ui}
            </div>
        )
    }
}

export default Countries
