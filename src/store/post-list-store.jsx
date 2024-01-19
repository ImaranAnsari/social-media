import { createContext, useReducer } from "react";


const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { },
}
export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currePostList, action) => {
    let newPostList = currePostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currePostList.filter(post => post.id !== action.payload.id);
    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currePostList];
    }
    return newPostList
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                userId: userId,
                title: postTitle,
                body: postBody,
                reactions: reactions,
                tags: tags
            }
        })
    };

    const addInitialPosts = (posts) => {
        console.log('posts', posts);
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: posts
        })
    };

    const deletePost = (id) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                id,
            }
        })
    };


    return <PostList.Provider value={
        {
            postList,
            addPost,
            deletePost,
            addInitialPosts,
        }
    }>
        {children}
    </PostList.Provider>
};



export default PostListProvider;