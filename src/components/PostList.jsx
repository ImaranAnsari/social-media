import { useContext } from "react";
import SocialPostList from "./SocialPostList";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData);

    const handleGetPostClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts)
            });
    }
    return (
        <>
            {postList && postList.length === 0 && (<Welcome getGetPostsClick={handleGetPostClick} />)}
            {postList && postList.map((post) => (
                <SocialPostList key={post.id} post={post} />
            ))}

        </>
    )
}

export default PostList