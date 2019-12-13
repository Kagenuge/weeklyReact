import React, { useState, useEffect } from 'react';
import Post from './Post';
import { fetchData, deletePost } from '../serviceClient';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getData = () => {
    fetchData(res => setPosts(res))
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (event) => {
    console.log(event.target.id)
    deletePost(event.target.id);
  };

  const handleModify = () => {
    
  }

  const checkValue = (value) => {
    if (value === false) {
      return 'Still in progress...';
    } else {
      return 'Completed!';
    }
  };

  const parseDate = (date) => {
    if (!date) {
      return;
    } else {
      const newdate = new Date(date);
      return newdate.toLocaleDateString();
    }
  };

  const rows = posts.map(post => <Post title={post.title} descr={post.description} ttm={post.timetomaster} ts={post.timespent} src={post.source} startl={parseDate(post.startlearningdate)} inprog={checkValue(post.inprogress)} compdate={parseDate(post.completiondate)} key={post.id} id={post.id} handleDelete={handleDelete} handleModify={handleModify}/>)

  return (
    <div className="diary">
      {rows}
    </div>
  )
}

export default Posts;