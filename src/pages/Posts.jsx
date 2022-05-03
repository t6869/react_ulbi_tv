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
import {getPageCount, getPgaesArray} from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAvdSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit));
    });

    console.log(totalPages)

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);


    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    //Получаем post  из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

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
        {postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }
        {isPostsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            : <Postlist removePost={removePost} posts={sortedAvdSearchedPosts} title={"Список по JS"}/>
        }
        <Pagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
        />
    </div>);
};

export default Posts;
