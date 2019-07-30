import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
/*import {BrowserRouter, Route, Link} from 'react-router-dom';*/


/*const PageOne = () => {
    return (
        <div>
            PageOne
            <Link to="/">Navigate to page one</Link>
        </div>
    );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/pagetwo">Navigate to page two</Link>
        </div>
    );
};*/

/*const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log('Success callback', position),
        (err) => console.log('Error callback', err)
    );
    return (
        <div>Latitude: </div>
    );
};*/

/*const App = () => {
    return (
      <div>
          <BrowserRouter>
              <div>
                  <Route path = "/" exact component={PageOne}/>
                  <Route path = "/pageTwo" component={PageTwo}/>
              </div>
          </BrowserRouter>
      </div>
    );
}*/

class App extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {lat: null, errMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Success callback', position);
                this.setState({lat: position.coords.latitude}) //update the setState

                /!*never did this
                * this.state.lat = position.coords.latitude*!/
            },
            (err) => {
                this.setState({errMessage: err.message});
            }
        );
    }*/

    state = {lat: null, errMessage: ''};

    componentDidMount() {
        //every time call setState will update the component
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) =>this.setState({errMessage: err.message})
        );

    }
    /*Helper function*/
    renderContent() {
        if(this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage}</div>;
        }

        if(!this.state.errMessage && this.state.lat) {
            /* return <div>Latitude: {this.state.lat}</div>;*/
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="loading"/>;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
               {/* <span>
                <BrowserRouter>
              <div>
                  <Route path = "/" exact component={PageOne}/>
                  <Route path = "/pageTwo" component={PageTwo}/>
              </div>
          </BrowserRouter>
            </span>*/}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));