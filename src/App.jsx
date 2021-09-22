import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './style.css'
import Weather from './weather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      city: '',
      searchQuery: '',
      showLocationInfo: false,
      showError: false,
      weatherInfo: [],
    }
  }


  // getWeatherData = async() =>{
  //   let weatherInfo = await axios.get(`${process.env.REACT_APP_API}weather?city=${this.state.userCityInput.toLocaleLowerCase()}`);
  //   this.setState({
  //     weatherInfo:weatherInfo.data,
  //   })



  getLocation = async (event) => {
    event.preventDefault();

    try {


      await this.setState({
        city: event.target.city.value,
        searchQuery: event.target.city.value
      });
      let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LocationIQ_Key}&q=${this.state.searchQuery}&format=json`;
      let weatherInfo = await axios.get(`http://localhost:3008/weather?city=${this.state.city}`);

      let locResults = await axios.get(reqUrl);



      // console.log(weatherInfo.data.data);
      this.setState({
        locationResult: locResults.data[0],
        weatherInfo: weatherInfo.data,
        showError: false,
        showLocationInfo: true,
      })
        ;
    }

    catch {
      this.setState({
        showError: true,
        showLocationInfo: false
      })
    }
  };

  render() {
    return (
      <div className={"text-center "}>
        <h3 className={"m-2"}> City explorer App 🗺️ 📍 </h3>
        {/* <button onClick={this.getLocation}> go somewhere</button>' */}
        <form className={'m-l-0 p-l-0'} onSubmit={this.getLocation} >
          <input type="text" name='city' />
          <input className={'btn btn-primary m-3'} type="submit" value='Explore!' />
        </form>


        {this.state.showLocationInfo && <>
          <p>City Name 🏙️: {this.state.searchQuery}</p>
          <p>latitude 🌍: {this.state.locationResult.lat}</p>
          <p>longitude 🌍: {this.state.locationResult.lon}</p>
  {
            this.state.weatherInfo.map((info, idx) => {
              return (<div>
                <Weather style={{ textAlign: "center" }} kry={idx} weatherInfo={info} />
              </div>
              )
            })
          }
          <img className={'rounded float-right'} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LocationIQ_Key}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city" /></>}




        {this.state.showError &&
          <> <h3>😢Page Not found Sorry !!</h3>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt="" />
          </>}
      </div>
    )
  }
}

export default App;
