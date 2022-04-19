import React from 'react';
import {PostItem} from './PostItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export const Postlist = ({posts, title, removePost}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        );
    }
    ;

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>
                {title}
            </h2>
            <TransitionGroup>
                {posts.map((item, index) =>
                    <CSSTransition
                        key={item.id}
                        timeout={550}
                        classNames="post"
                    >
                        <PostItem removePost={removePost} num={index + 1} post={item}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};