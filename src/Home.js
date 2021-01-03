import {useState} from 'react';

const Home = () => {
    const [blogs,setBlogs] = useState([
      {title:'My new website', body:'some cool info ...',author:'billy', id:1},
      {title:'Welcome party', body:'some cool info ...',author:'marry', id:2},
      {title:'Awesome news', body:'some cool info ...',author:'freddy', id:3},
    ])

  
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
          <h1>{blog.title}</h1>
          <p>Written by {blog.author}</p>
        </div>
      ))}      
    </div>
  );
};

export default Home;
