import { useState } from 'react';

const Home = () => {
    // let name = 'Mario'
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        if (name === 'mario') {
            setName('luigi');
            setAge(30);
        } else {
            setName('mario');
            setAge(25);
        }   
        // setName('luigi');
    }

    const handleClickAgain = (name, e) => {
        return (
            console.log('Hello ' + name, e.target)
        );
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old!</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Laurens', e)}>Click me</button>

        </div>
    );
}

export default Home;