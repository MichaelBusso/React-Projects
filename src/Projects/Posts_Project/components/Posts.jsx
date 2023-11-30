import React from 'react'
import { useState, useEffect } from 'react'

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async (userId) => {
      const response = await fetch(`http://localhost:3500/posts?userId=1`);
      const posts = await response.json();
      setPosts(posts);
      setAllPosts(posts)
    }
    (async () => await fetchPosts())()
  }, [])

  const searchHandler = (e) => {
    setPosts(allPosts.filter((item) => item.title.includes(e.target.value)));
  }

  return (
    <>
      <div>Posts</div>
      <div>
        <input type="radio" id="title" name="search" value="title" />
        <label for="title">Search by title</label>
      </div>
      <div>
        <input type="radio" id="id" name="search" value="id" />
        <label for="id">Search by id</label>
      </div>
      <div>
        <input type="radio" id="done" name="search" value="done" />
        <label for="done">Search by done</label>
      </div>
      <input type='text' placeholder='Search' onChange={searchHandler} />

      <ul>
        {posts.map((item) => (
          <li>{item.id}: {item.title}</li>
        ))}
      </ul>
    </>

  )
}

export default Posts;