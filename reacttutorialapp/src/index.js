// Import react/dom libs
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
    const buttonText = { text: 'Click Me' };
    const labelName = {text: 'Enter name: '}
    return (
        <div>
            <label className="label" htmlFor="name">
                {labelName.text}
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
};

// display react component
ReactDOM.render(<App/>, document.querySelector('#root'));