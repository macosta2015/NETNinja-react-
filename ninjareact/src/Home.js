const Home = () => {

    const handleClick = (e) => {
        console.log('Hello Ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target);
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            {/* onClick activates the function */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
            {/* <button onClick={handleClickAgain('mario')}>Click me again</button> */}
        </div>
    );
}

export default Home;