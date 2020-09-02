import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
    
//     return <div>Latitude: </div>; // Problem is getting the latitude value of the 'position' here. That's why the class components are used.
// }

class App extends React.Component {
    // 1. First method of declare and initialize the state prop with constructor() 
    
    
    /*    
    // not required in react but is specific to javascript and can use it to execute something first    
    constructor(props) {
        // initialize state (one way of initializing state)
        super(props);

        // we only use [this.state = ] ONLY when initializing state. to set state use setState
        this.state = { lat: null, errorMessage: '' }; // {} is the state object with a key value pair. null -> default value

        
    }
    */

    // 2. Second way of declare and initialize the state property - Babel generate the above code for the this one.
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }), 
            err => this.setState({ errorMessage: err.message })
        );
    }

    // componentDidUpdate() {
    //     console.log('Component was just updated -> then render() called');
    // }
    // render method is compulsory
    render() {        
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            //return <div>Latitude: {this.state.lat}</div>;
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <div>Loading...</div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);