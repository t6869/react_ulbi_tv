import React, {useEffect, useState} from 'react';
import {Postlist} from './components/PostList';
import {PostFilter} from "./components/PostFilter";
import {PostForm} from "./components/PostForm";
import {MyModal} from "./components/UI/MyModal/MyModal";
import {MyBytton} from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import {PostService} from "./API/PostService";
import './styles/App.css'
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";


function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAvdSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    });


    useEffect(() => {
        fetchPosts();
    }, []);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (<div className="App">
        <MyBytton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пользователя
        </MyBytton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm createPost={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            : <Postlist removePost={removePost} posts={sortedAvdSearchedPosts} title={"Список по JS"}/>
        }
    </div>);
};

export default App;
