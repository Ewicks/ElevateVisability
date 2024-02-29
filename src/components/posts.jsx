import React from 'react';
import { Link } from 'react-router-dom';

function truncateText(text, maxLength) {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='row row-cols-1 row-cols-md-3'>
      {posts.map((post, index) => (
        <div className='col p-3 mb-4' key={index}>
        <Link to={post.href}>
          <div className='card post-card'>
            <img className='card-img-top' src={post.image} alt={post.title} />
            <div className='card-body text-light'>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-text'>{truncateText(post.text, 150)}</p>
              <p className='card-author'>{post.author} / {post.date}</p>
            </div>
          </div>
        </Link>

        </div>
      ))}
    </div>
  );
}

export default Posts;
