import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import '../css/detailed.css';
import { Link } from 'react-router-dom';

class DetailedCountry extends Component {
    state = {
        borderCountriesResponse:[],
        info:this.props.location.info,
        isDark:this.props.location.isDark
    }

    componentDidMount() {
        this.handleBorders()
    }

    componentDidUpdate(prevProps) {
        if(this.props.location.info !== prevProps.location.info){
            this.setState({borderCountriesResponse:[],info:this.props.location.info})
            this.handleBorders()
        }
    }

    handleBorders = () =>{
        this.props.location.info.borders.map(item=>{
            fetch(`https://restcountries.com/v3.1/alpha?codes=${item}`)
            .then(response=>response.json())
            .then(response=>this.setState({
                borderCountriesResponse:[...this.state.borderCountriesResponse,response]
            }))
            .catch(err=>console.log(err))
        })
    }
    handleDarkMode = () => {
        this.setState(prevState=>{
            return  {isDark:!prevState.isDark}
          })    
    }
    render() {
        const {flag,name,nativeName,population,region,
            subregion,capital,topLevelDomain,currencies,languages} = this.state.info
        const {borderCountriesResponse} = this.state
        const body = document.body
        if(this.state.isDark){
            body.classList.add('dark-body')      
        }else{
            body.classList.remove('dark-body')
        }
        return (
            <div>
                <Header handleDarkMode = {this.handleDarkMode} isDark = {this.state.isDark}/>
                <div className="detailed-container">
                    <div className="container">
                        <Link to={{pathname:"/",isDark:this.state.isDark}} className='link shadow'>
                            <button className={this.state.isDark ? 'btn-detailed dark-elements' : 'btn-detailed'}><span><FontAwesomeIcon icon={faArrowLeft} /></span>Back</button>
                        </Link>
                        <div className="detailed-info-flex">
                            <div className="large-img">
                                <img src={flag} alt={name}/>
                            </div>
                            <div className="detailed-info">
                            <h2>{name}</h2>
                            <div className="lists">
                                <ul>
                                    <li>Native name: <span>{nativeName}</span></li>
                                    <li>Population: <span>{population.length===0 ? 'none': population.toLocaleString()}</span></li>
                                    <li>Region: <span>{region.length===0 ? 'none': region}</span></li>
                                    <li>Sub Region: <span>{subregion.length===0 ? 'none': subregion}</span></li>
                                    <li>Capital: <span>{capital.length===0 ? 'none': capital}</span></li>
                                </ul>
                                <ul>
                                    <li>Top Level Domain: <span>{topLevelDomain.length===0 ? 'none': topLevelDomain.map((x)=>x+" ")}</span></li>
                                    <li>Currencies: <span>{currencies.length===0 ? 'none': currencies.map((x,y)=>y===currencies.length-1 ? x.name : x.name + ", ")}</span></li>
                                    <li>Languages: <span>{languages.length===0 ? 'none': languages.map((x,y)=>y===languages.length-1 ? x.name : x.name + ", ")}</span></li>
                                </ul>
                            </div>
                            <div className="borders">
                                <p>Border Countries: 
                                    {borderCountriesResponse.length===0 ? ' none': 
                                     borderCountriesResponse.map(item=>item.map((x,y)=><Link key={y} to={{pathname:"/DetailedCountry", info:x,isDark:this.props.location.isDark}}><button className={this.state.isDark ? 'small-btn shadow dark-elements' : 'small-btn shadow' }>{x.name}</button></Link>))} 
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailedCountry
