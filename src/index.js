import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
    
//     return <div>Latitude: </div>; // Problem is getting the latitude value of the 'position' here. That's why the class components are used.
// }

class App extends React.Component {
    // not required in react but is specific to javascript and can use it to execute something first
    constructor(props) {
        // initialize state (one way of initializing state)
        super(props);

        // we only use [this.state = ] ONLY when initializing state. to set state use setState
        this.state = { lat: null }; // {} is the state object with a key value pair. null -> default value

        window.navigator.geolocation.getCurrentPosition(position => {
            // update state with setState
            this.setState({ lat: position.coords.latitude });    
        }, err => console.log(err));
    }
    // render method is compulsory
    render() {        
        return <div>Latitude: { this.state.lat }</div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);