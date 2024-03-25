import './App.css'
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    const randomAnimalIndex = Math.floor(Math.random() * animals.length)
    return animals[randomAnimalIndex]
}

function App() {
    // function makeArray(){
    //     return [1,10,32,40]
    // }
    // const [firstElement, secondElement] = makeArray();
    // console.log(firstElement, secondElement)

    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
    )
}

export default App;