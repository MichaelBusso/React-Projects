import React, { useState, useEffect } from 'react';
import Post from './Post';
import './components style/PostWrapper.css';

const PostsWrapper = () => {

  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState([]);

  const userId = (JSON.parse(localStorage.getItem('activeUser')))[0].id;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`http://localhost:3500/posts`);
      const savedPosts = await response.json();
      setPosts(savedPosts);
    }
    (async () => await fetchPosts())();
  }, [])

  const toggleShow = (id) => {
    showPosts.includes(id) ? setShowPosts(showPosts.filter((postId) => postId !== id)) : setShowPosts([...showPosts, id]);
  }

  return (
    <div className='PostWrapper'>
      <h1>Posts!</h1>
      {posts.map((post, index) => (
        <Post
          show={showPosts.includes(post.id) ? true : false}
          post={post}
          key={index}
          toggleShow={toggleShow}
        />
      ))}
    </div>
  )
}

export default PostsWrapper;