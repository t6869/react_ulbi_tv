import React, { useState, useMemo } from 'react';
import { Postlist } from './components/PostList';
import {PostFilter} from "./components/PostFilter";
import './styles/App.css'
import {PostForm} from "./components/PostForm";
import {MyModal} from "./components/UI/MyModal/MyModal";
import {MyBytton} from "./components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa11a', body: 'eee' },
    { id: 2, title: 'bbb', body: 'tyi' },
    { id: 3, title: 'ddd', body: 'asc' },
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
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

  const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
        <MyBytton style={{marginTop: 30 }} onClick={() => setModal(true)}>
            Создать пользователя
        </MyBytton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm createPost={createPost}/>
        </MyModal>
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
