import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
class WeatherDay extends React.Component {
    render() { 
 return (<div className={"text-center lol "}>
                         <p> 🌡️ ☁️ ☀️ ⛈️Weather info </p>
                        <p>Date: {this.props.date}</p>
                        <p>Description: {this.props.desc}</p>
                      </div >)    }
}
 
export default WeatherDay;