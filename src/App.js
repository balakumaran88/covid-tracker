import React, {Component} from 'react';

// import {Cards} from './components/Cards/Cards'; 
// import {Chart} from './components/Chart/Chart'; 
// import {CountryPicker} from './components/CountryPicker/CountryPicker'; 

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

import image from './Images/image.png';


class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData()
    this.setState({data})
  }

  handleCountryChange = async (country) => {
    const fetchedData =  await fetchData(country);
    this.setState({data:fetchedData, country}); 
  } 

  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className="image" src={image} alt="COVID-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        
      </div>
    );
  }
}

export default App;
