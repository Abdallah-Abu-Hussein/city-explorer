import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './style.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: '',
      showLocationInfo: false,
      showError:false,
    }
  }

  getLocation = async (event) => {
    try{event.preventDefault();

    // console.log('hello let\'s go somewhere');
    // let cityName = event.target.city.value;
    this.state.showLocationInfo = true;
    await this.setState({ searchQuery: event.target.city.value });
    let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LocationIQ_Key}&q=${this.state.searchQuery}&format=json`;
    let locResults = await axios.get(reqUrl);
    // console.log('our results ',locResults.data[0]);

    this.setState({ locationResult: locResults.data[0] });
  }
  catch{
    console.log('something wrong ');
    this.setState({
      showError:true,
      showLocationInfo:false,
    })
  }
}
    
  render() {
    return (
      <div className={"text-center "}>
        <h3 className={"m-2"}> City explorer App 🗺️ 📍 </h3>
        {/* <button onClick={this.getLocation}> go somewhere</button>' */}
        <form className={'m-l-0 p-l-0'} onSubmit={this.getLocation} >
          <input type="text" name='city' />
          <input className={'btn btn-primary m-3'} type="submit" value='Explore!' />
        </form>
        {this.state.showLocationInfo && <><p>City Name : {this.state.searchQuery}</p>
          <p>latitude : {this.state.locationResult.lat}</p>
          <p>longitude : {this.state.locationResult.lon}</p>
          <img className={'rounded float-right'} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LocationIQ_Key}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city" /></>}

          {this.state.showError &&
          <> 
          
          <h1> 🥺 Page NotFound</h1>
          <ul>
            <li>Make sure you entered a valid City name</li>
            <li>Refresh The Page</li>
          </ul>
          <img src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt="" />
          </>
          }



      </div>
    )
  }
}

export default App;
