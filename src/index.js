import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {

  componentDidMount() {
    console.log('Component was rendered to the screen.');
    window.navigator.geolocation.getCurrentPosition(
      position  =>  this.setState ( {lat : position.coords.latitude}),
      err => this.setState ( {errorMessage: err.message})
    );
  }

  componentDidUpdate(){
    console.log('Compoenent was updated in the screen.')
  }

  state = {lat : '0.000' , errorMessage: ""};


  renderComponenet() {
    if (this.state.errorMessage && !this.state.lat) {
      return  <div>  Error: {this.state.errorMessage } </div>;
       }
       if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat ={this.state.lat }/>;
         }
       
         return <Spinner />;
  }

  render() {
     return <div className='border red'> {this.renderComponenet()}</div>
  }
 }
 
ReactDOM.render( <App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
