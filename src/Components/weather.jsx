import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
class Weather extends Component {
        render() {
            return (<div className={"text-center lol "}>
                         <p> 🌡️ ☁️ ☀️ ⛈️Weather info </p>
                        <p>Date: {this.props.weatherInfo.date}</p>
                        <p>Description: {this.props.weatherInfo.desc}</p>
                      </div >)
        }
} export default Weather
