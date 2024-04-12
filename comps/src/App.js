import React, { useState } from 'react';
import Dropdown from "./components/Dropdown";

function App() {
    const [selected, setSelected] = useState(null);

    const handleSelected = (option) => {
        setSelected(option);
    }

    const options = [
        {
            label: 'Red',
            value: 'red'
        },
        {
            label: 'Green',
            value: 'green'
        },
        {
            label: 'Blue',
            value: 'blue'
        }
    ];

    return(
        <div className='flex'>
            <Dropdown options={options} value={selected} onChange={handleSelected}/>
            <Dropdown options={options} value={selected} onChange={handleSelected}/>
        </div>
    )
}

export default App;