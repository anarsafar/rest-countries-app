import React,{Component} from 'react';
import Select from 'react-select';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value:'Europe',label:'Europe'},
  { value:'Oceania',label:'Oceania'}
];

class SelectFilter extends Component {

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
    fetch(`https://restcountries.eu/rest/v2/region/${selectedOption.value}`)
        .then(response=>response.json())
        .then(response=>{
            this.props.parentCallback(response)
        })
  };

  render() {
      
    const { selectedOption } = this.state;

    const color = {
      control:(provided,state) => ({
        ...provided,
        backgroundColor: this.props.isDark ? 'hsl(209,23%,22%)' : 'white',
        border:'none',
      }),
      option:(provided, state) => ({
          ...provided,
          backgroundColor: this.props.isDark ? 'hsl(209,23%,22%)' : 'white',
      }),
      menu: (provided, state) => ({
        ...provided,
        color: this.props.isDark ? 'white' : 'hsl(209,23%,22%)',
        backgroundColor: this.props.isDark ? 'hsl(209,23%,22%)' : 'white',
      }),
      placeholder:(provided,state) => ({
        ...provided,
        color: this.props.isDark ? 'white' : 'hsl(209,23%,22%)'
       }),
       singleValue:styles => ({
         ...styles,
         color: this.props.isDark ? 'white' : 'hsl(209,23%,22%)'
       })
    }

    return (
      <Select
        className="select-box shadow"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        styles={color}
      />
    );
  }
}

export default SelectFilter