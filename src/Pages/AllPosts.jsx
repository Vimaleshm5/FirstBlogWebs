import React, { useState, useEffect } from 'react'
import Container from '../components/container/Container';
import service from "../appwrite/database";
import PostCard from '../components/Postcard';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
        service.getPosts([]).then((posts) => {
            
        
        if (posts) {
            setPosts(posts.documents)
        }
    }) }, [])

    

    return (
        <div >
            <Container>
                <div >
                    {posts?.map((post) => (
                        <div key={post.$id} >
                            <PostCard $id={post.$id} title={post.title} featureImage={post.featureImage}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts