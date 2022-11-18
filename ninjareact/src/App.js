import './App.css';
// import React from 'react'

function App() {
  const title = "Welcome to the new blog"
  const likes=50;
  const link = "https://github.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p> Liked {likes} times</p>
        <p> {Math.random() * 10} </p> 

        <a href={link}> Google Website</a>

        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
