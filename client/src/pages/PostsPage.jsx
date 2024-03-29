import React, { useEffect, useState } from 'react'
import Postitem from '../components/Postitem'
import axios from '../utils/axios'

export const PostsPage = () => {
    const [posts, setPosts] = useState([])
    console.log('posts', posts)
    const fetchMyPosts = async () => {
        try {
            const { data } = await axios.get('/posts/user/me')
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyPosts()
    }, [])

    if (!posts.length) {
        return (
            <div className="text-xl text-center text-white py-10">
                загрузка.
            </div>)
    }

    return (
        <div className=" w-1/2 mx-auto py-10 flex-col gap-10">
            {posts?.map((post, index) => <Postitem key={index} post={post}/>)}
        </div>

    )
}
