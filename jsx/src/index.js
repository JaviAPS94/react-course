// 1) Import the react and reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root

const el = document.getElementById('root');

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a component

function App() {
    // const name = 'Alex';
    // const age = 29;

    // return (
    //     // <h1>{new Date().toLocaleTimeString()}</h1>
    //     <h1>Hi, my name es {name} and my age is {age}</h1>
    // )
    // const inputType = 'number';
    // const minValue = 5;

    // return <input style={{border: '3px solid red'}} type={inputType} min={minValue}/>
    // 
    // return <input spellCheck={false} maxLength={50}/>
    return (
        <input placeholder="hi there" />
      );
}

// 5) Show the component on the screen

root.render(<App/>)