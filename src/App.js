import React, { useState, useMemo } from 'react';
import { Postlist } from './components/PostList';
import {PostFilter} from "./components/PostFilter";
import './styles/App.css'
import {PostForm} from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aaa', body: 'eee' },
    { id: 2, title: 'bbb', body: 'tyi' },
    { id: 3, title: 'ddd', body: 'asc' },
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});

    //-?
  const sortedPosts = useMemo(()=>{
      console.log('Сортировка сработала')
      if(filter.sort) {
          return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
  },[filter.sort, posts]);

  const sortedAvdSearchedPosts = useMemo(() =>{
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  },[filter.query, sortedPosts]);

  const createPost = (newPost) => (
    setPosts([...posts, newPost])
  );

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
        <PostForm createPost={createPost}/>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        <Postlist removePost={removePost} posts={sortedAvdSearchedPosts} title={"Список по JS"} />
    </div>
  );
};

export default App;
