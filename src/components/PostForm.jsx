import React, {useState} from 'react';
import { MyBytton } from '../components/UI/button/MyButton';
import { MyInput } from '../components/UI/input/MyInput';

export const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title: '', body: '',});

    const addNewPost = (e) =>{
        e.preventDefault();
    
        const newPost = {
            ...post, 
            id: Date.now(),
        };
        
        createPost(newPost);
        setPost({title: '', body: '',});
    };

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Введите название "
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
            <MyInput
                type="text"
                placeholder="Введите описание"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
            />
            <MyBytton onClick={addNewPost}>Добавить пост</MyBytton>
        </form>
    );
};