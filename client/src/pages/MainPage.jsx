import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopularPosts from '../components/PopularPosts'
import Postitem from '../components/Postitem'
import { getAllPosts } from '../redux/features/post/postSlice'

export const MainPage = () => {
    const dispatch = useDispatch()
    const { posts, popularPosts } = useSelector((state) => state.post)
    console.log('posts', posts)
    console.log('popularPosts', popularPosts)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    // if (!posts.length) {
    //     return (
    //         <div className="text-xl text-center text-white py-10">
    //             Постов не существует
    //         </div>)
    // }

    return (
        <div className=" max-w-[900px] mx-auto py-10">
            <div className="flex justify-between gap-8">
                <div className="flex flex-col gap-10 basis-4/5">
                    {
                        posts && posts.length !== 0 ? posts.map((post, index) => (
                            <Postitem key={index} post={post}/>
                        )) : <div className=" text-xs text-gray-400">Постов нет</div>
                    }
                </div>
                <div className="basis-1/5">
                    <div className=' text-sm uppercase text-white'>
                        Популярные
                    </div>

                    {popularPosts ? popularPosts.map((post, index) => (
                        <PopularPosts key={index} post={post}/>
                    )) : <div className=" text-xs text-gray-400">Постов нет</div> }
                </div>
            </div>
        </div>
    )
}
