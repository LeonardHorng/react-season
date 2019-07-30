//Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a react component
const App = () => {
    const displayClickMe = {text: 'Click Me'};
    const style = {backgroundColor: 'blue', color:'white'};
    return (
        <div>
            <label className="label" htmlFor="name">Enter name</label>
                <input id="name" type="text"/>
                <button style={style}>{displayClickMe.text}</button>
        </div>
    );
};


//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));