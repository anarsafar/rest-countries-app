import React, { Component } from 'react'

class Country extends Component {
    render() {
        const {name,flag,population,capital,region} = this.props.data
        return (
            <div className={this.props.isDark ? "countries-card shadow dark-elements" : 'countries-card shadow' }>
                <div className="img">
                    <img src={flag} alt={name}/>
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <p>Population: <span>{population.toLocaleString()}</span></p>
                    <p>Region: <span>{region==='' ? 'none' :region}</span></p>
                    <p>Capital: <span>{capital==='' ? 'none' : capital}</span></p>
                </div>
            </div>
        )
    }
}

export default  Country