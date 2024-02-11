import React, { useEffect, useState } from 'react'
import service from "../appwrite/database";
import Container from '../components/container/Container';
import PostCard from '../components/Postcard';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
               
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div >
                <Container>
                    <div className='w-full h-screen flex justify-center bg-slate-300'>
                        <div >
                            <h1 className='text-4xl font-bold ' >
                                Login to read posts
                            </h1>
                        </div>

                    </div>
                    <hr className='h-1 bg-black p2' />
                </Container>
            </div>
        )
    }
    return (
        <div >
            <Container >
                <div className='flex '>
                    {posts?.map((post) => (
                        <div key={post.$id} >
                            <PostCard $id={post.$id} title={post.title} featureImage={post.featureImage} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home