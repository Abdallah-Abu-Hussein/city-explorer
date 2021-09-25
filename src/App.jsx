import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './style.css'
import Weather from './Components/weather';
import Movie from './Components/Movie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      city: '',
      searchQuery: '',
      showLocationInfo: false,
      showError: false,
      showWeather: false,
      weatherInfo: [],
      movieInfo: [],
    }
  }

  getMovie = async () => {

    let reqMovieUrl = `${process.env.REACT_APP_API}/getMovie?city=${this.state.searchQuery}`;

    let movieRes = await axios.get(reqMovieUrl);
    console.log(movieRes);
    this.setState({
      movieInfo: movieRes.data,
      showMovieInfo: true
    })
  }


  getWeatherData = async () => {
    let weatherInfo = await axios.get(`${process.env.REACT_APP_API}/getWeather?city=${this.state.searchQuery}`);

    this.setState({
      weatherInfo: weatherInfo.data,
      showWeather: true,
    });
  }


  getLocation = async (event) => {
    event.preventDefault();

    try {
      await this.setState({
        searchQuery: event.target.city.value
      });
      let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LocationIQ_Key}&q=${this.state.searchQuery}&format=json`;

      let locResults = await axios.get(reqUrl);
      this.setState({
        locationResult: locResults.data[0],
        showError: false,
        showLocationInfo: true,
      });
      this.getWeatherData();
      this.getMovie();
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
                <Weather key={idx} style={{ textAlign: "center" }} weatherInfo={info} />
              </div>
              )
            })
          }
          <img className={'rounded float-right'} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LocationIQ_Key}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city" />

          {this.state.movieInfo.map((info, idx) => {
            return (
              <Movie key={idx} movieInfo={info} />
            )
          })}
        </>}




        {this.state.showError &&
          <> <h3>😢Page Not found Sorry !! you can only type amman/ paris / seattle for the weather info in this lab 07 </h3>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt="" />
          </>}
      </div>
    )
  }
}

export default App;
