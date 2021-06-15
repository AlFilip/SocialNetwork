import React from "react";

import {posts, posts_list, posts_title, posts_add_form} from "./MyPosts.module.css";
import Post from "./Post/Post";


export default function MyPosts(props) {
    debugger;
    const postsConverted = props.postData
        .map(p => <Post name={p.name} message={p.message} likesCount={p.likesCount} />);

    const addPost = () => {
        props.addPost()
    };

    const onPostChange = (e) => {
        const text = e.target.value;
        props.onPostChange(text);
    }

    return (
        <>
            <div className={posts}>
                <div className={posts_title}>
                    My Posts
                </div>
                <div className={posts_add_form}>
                    <textarea value={props.newPost} onChange={onPostChange}
                              cols="100" rows="5" placeholder="Enter here" />
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={posts_list}>
                {postsConverted}
            </div>
        </>
    )
}