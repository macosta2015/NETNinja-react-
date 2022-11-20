import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name,setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // Use effect always runs after each render. You can add an argument so that it does not render
    useEffect(() =>{    
        console.log('use effect ran')
        console.log(name);
    }, [name]); //The name is a dependency, when it runs the function it changes. 

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('Luigi')}>change name</button>
            <p> {name} </p>
        </div>
    );
}

export default Home;