import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updatePost } from '../redux/features/post/postSlice'
import axios from '../utils/axios'

export const EditPostPage = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [oldImage, setOldImage] = useState('')
    const [newImage, setNewImage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        // console.log('data', data)
        setTitle(data.title)
        setText(data.text)
        setOldImage(data.imgUrl)
    }, [params.id])

    const submitHandler = () => {
        try {
            const updatedPost = new FormData()
            updatedPost.append('title', title)
            updatedPost.append('text', text)
            updatedPost.append('id', params.id)
            updatedPost.append('image', newImage)
            dispatch(updatePost(updatedPost))
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    const clearFormHandler = () => {
        setTitle('')
        setText('')
    }

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    return (
        <>
            <form
                onSubmit={(e) => e.preventDefault()}
                className=' w-1/3 mx-auto py-10'
            >
                <label className=' text-gray-300 py-2 bg-gray-600 text-sm mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer '>
                    Прикрепить изображение:
                    <input
                        type="file"
                        className='hidden'
                        onChange={(e) => {
                            setNewImage(e.target.files[0])
                            setOldImage('')
                        }}
                    />
                </label>
                <div className="flex object-cover py-2">
                    { oldImage && (
                        <img
                            src={`http://localhost:8080/${oldImage}`}
                            alt={oldImage.name} />
                    )}
                    { newImage && (
                        <img
                            src={URL.createObjectURL(newImage)}
                            alt={newImage.name} />
                    )}
                </div>

                <label className='text-sm text-white opacity-70'>
                    Заголовок поста:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Заголовок'
                        className='mt-1 text-white w-full rounded-lg bg-gray-600 border py-1 px-2 text-base outline-none placeholder:text-gray-200'
                    />
                </label>

                <label className='text-sm text-white opacity-70'>
                    Текст поста:
                    <textarea
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Текст поста'
                        className='mt-1 text-white w-full rounded-lg bg-gray-600 border py-1 px-2 text-base outline-none resize-none h-80 placeholder:text-gray-200'
                    />
                </label>

                <div className="flex gap-8 items-center justify-center mt-4">
                    <button
                        onClick={submitHandler}
                        className="flex justify-center items-center bg-gray-600 text-sm text-white rounded-sm py-2 px-4 "
                    >
                        Добавить
                    </button>
                    <button
                        onClick={clearFormHandler}
                        className="flex justify-center items-center bg-red-500 text-sm text-white rounded-sm py-2 px-4 ">Отменить</button>
                </div>
            </form>
        </>
    )
}
