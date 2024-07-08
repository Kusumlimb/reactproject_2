import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import './Blogs.css';

export default function Blog() {
  return (
    <HomeLayout>
      <div className="blog-container">
        <h1 className="blog-title">Blog Page</h1>
        <div className="blog-post">
          <h2 className="post-title">Post Title 1</h2>
          <p className="post-content">This is the content of the first blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet.</p>
        </div>
        <div className="blog-post">
          <h2 className="post-title">Post Title 2</h2>
          <p className="post-content">This is the content of the second blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet.</p>
        </div>
        {/* Add more blog posts as needed */}
      </div>
    </HomeLayout>
  );
}
