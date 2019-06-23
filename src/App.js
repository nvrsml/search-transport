import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Map from './components/map';
import Bus from './components/bus';
import Weather from './components/weather';
import './App.css';

const API_KEY = "ebbf4416dc3c27eed4ea255b51428c61";

class App extends React.Component {

  state = {
    temp:undefined,
    city:undefined,
    country:undefined,
    sunrise:undefined,
    cond:undefined,
    wmax:undefined,
    wmin:undefined,
    error:undefined,
    bus1:undefined,
    iframe:undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.to.value;
    const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await API_URL.json();
    if (city) {
      this.setState({
        bus1:<Bus />,
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        sunrise:data.sys.sunrise,
        cond:data.weather[0].main,
        wmax:data.main.temp_max,
        wmin:data.main.temp_min,
        error:"",
        iframe:<Map />

      });
    } else{
      this.setState({
        temp:undefined,
        city:undefined,
        country:undefined,
        sunrise:undefined,
        cond:undefined,
        wmax:undefined,
        wmin:undefined,
        bus1:undefined,
        iframe:undefined,
        error: "Моля, въведете град"
      });
    }
  }
  getBus = async (b) => {
    b.preventDefault();
    const city1 = b.target.elements.from.value;
    if(city1){
      this.setState({

    });
  }else{
    this.setState({
      error: "Моля, въведете град"
    });
  }
}

  render () {
    return(
      <div>
        <div className="wrapper">
          <div className="main">



                <div className=" title-container">
                  <Info />
                </div>
                <div className="form-container">
                  <Form getWeather={this.getWeather}/>

                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    cond={this.state.cond}
                    wmax={this.state.wmax}
                    wmin={this.state.wmin}
                    bus1={this.state.bus1}
                    iframe={this.state.iframe}
                    error={this.state.error}
                  />

            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
