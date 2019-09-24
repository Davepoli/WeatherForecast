import React from 'react';


import Title from "./components/Title";
import Form from "./components/Form";
import Vedr from "./components/Vedr";
import Forecast from "./components/forecast";

import "./sass/app.scss";


import axios from 'axios';


const APIXU_KEY = "80a2b19015b54e628e5190124191206";
class App extends React.Component {
  state = {
    cityName: 'Bratislava', //aktualna poloha neskor..
    temp_c: null,
    isDay: 1,
    text: '',
    iconURL: '',
    forecastday: [],
    dayNum: 4,
    localtime: '',
    date: ""
  }

  getApi = (cityName, dayNum) => {
  axios.get(`https://api.apixu.com/v1/forecast.json?key=${APIXU_KEY}&q=${cityName}&days=${dayNum}`)
    .then(res => {
      const {data} = res
      // console.log(res.data);
        this.setState({
          cityName,
          temp_c: data.current.temp_c,
          isDay: data.current.is_day,
          text: data.current.condition.text,
          iconURL: data.current.condition.icon,
          localtime: data.location.localtime,
          forecastday: data.forecast.forecastday
        });
    })
  }

  getWeather = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.cityName.value;
    const {dayNum} = this.state;
    this.getApi(cityName, dayNum)
  }
  
  
 componentDidMount() {
    const { cityName, dayNum } = this.state;
    this.getApi(cityName, dayNum)
  }
  


  
  render() {
    
    const { cityName ,temp_c, isDay, text, iconURL, forecastday, localtime } = this.state;

    return (
      <div className="container">
        <div className="main">
          <div className="topSection">
            <Vedr
              localtime={localtime}
              cityName={cityName}
              temp_c={temp_c}
              isDay={isDay}
              text={text}
              iconURL={iconURL}
            />
            <Title  />
            <Form getWeather={this.getWeather}/>
          </div>
          <div className="bottomSection">
            <Forecast forecastday={forecastday}/>
          </div>
        </div>
      </div>
    );
  }
};

export default App;