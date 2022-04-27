import React from 'react';
import {MyBytton} from './UI/button/MyButton';

export const PostItem = ({post, num, removePost}) => {

    return (
        <div className='post'>
            <div className='post__content'>
                <div>
                    <strong>{post.id}. {post.title}</strong>
                    <div>{post.body}</div>
                </div>
            </div>
            <div className='post__btns'>
                <MyBytton onClick={() => removePost(post)}>Удалить</MyBytton>
            </div>
        </div>
    );

}; 