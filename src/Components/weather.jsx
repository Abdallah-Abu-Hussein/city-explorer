import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import WeatherDay from "./WeatherDay";
class Weather extends Component {
        render() {
            return (<div >
                    <WeatherDay date={this.props.weatherInfo.date} desc={this.props.weatherInfo.desc}/>
                     
                      </div >)
        }
} export default Weather
