import React from 'react';
import {PostForm} from "./PostForm";
import {MyInput} from "./UI/input/MyInput";
import {MySelect} from "./UI/select/MySelect";

export const PostFilter = ({filter, setFilter}) => {
    return(
    <div>
        <MyInput
            type='text'
            placeholder='Поиск...'
            value={filter.query}
            onChange={(e)=> setFilter({...filter, query: e.target.value})}
        />
        <MySelect
            value = {filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка по"
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ]}
        />
    </div>
    );
}