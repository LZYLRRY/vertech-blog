const Home = () => {

    const handleClick = (e) => {
        console.log('Hi Larry', e);
    }

    const handleClickAgain = (name, e) => {
        return (  
            console.log('Hello ' + name, e.target)
        );
    }
     

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Laurens', e)}>Click me</button>

        </div>
     );
}
 
export default Home;