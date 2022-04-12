import React from 'react';
import { PostItem } from './PostItem';

export const Postlist = ({posts, title, removePost}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        );
    };

    return (
        <div>
            <h2 style= {{textAlign: 'center'}}>
                {title}
            </h2>
            {
                posts.map((item, index) => {
                    return (
                        <PostItem removePost={removePost} num={index + 1} post={item} key={item.id} />
                    );
                })
            }
        </div>
    );
};