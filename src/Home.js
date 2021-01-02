import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'some cool info', author: 'kaerr', id: 1 },
    {
      title: 'My first book',
      body: 'more about my book',
      author: 'steven',
      id: 2,
    },
    { title: 'Party time', body: 'some party info', author: 'vernard', id: 3 },
  ]);
  return (
    <div className="home">
      <h1>The Blogs ♥️ !!☉</h1>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
