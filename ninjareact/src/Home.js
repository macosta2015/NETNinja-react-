const Home = () => {

    const handleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return (
        <div className="Home">
            <h2>Homepage</h2>
            {/* onClick activates the function */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain('mario')
            }}>Click me again</button>
            {/* <button onClick={handleClickAgain('mario')}>Click me again</button> */}
        </div>
    );
}

export default Home;