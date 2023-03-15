import React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const Postitem = ({ post }) => {
    console.log('post', post)
    const DMY = post.createdAt.slice(0, 10).split('-').reverse().join('-')
    console.log(DMY)
    return (
        <div className='flex flex-col basis-1/4 flex-grow'>
            <div className={
                post.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'
            } >
                { post.imgUrl && (
                    <img
                        src={`http://localhost:8080/${post.imgUrl}`}
                        alt="img"
                        className=' object-cover w-full'
                    />
                )}
            </div>
            <div className="flex justify-between items-center pt-2">
                <div
                    className='text-xs text-white opacity-50'>
                    {post.username}
                </div>
                <div
                    className='text-xs text-white opacity-50'>
                    {DMY} {' '}
                    <Moment data={post.createdAt} format='D MMM YYYY'/>
                </div>
            </div>
            <div className="text-white text-xl">{post.title}</div>
            <p className=' text-white opacity-60 text-base pt-4'>{post.text}</p>

            <div className='flex gap-3 mt-2 items-center'>
                <button className=' flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                    <AiFillEye/> <span>{post.views}</span>
                </button>
                <button className=' flex items-center justify-center gap-2 text-xs text-white opacity-50'>
                    <AiOutlineMessage/>{' '}
                    <span>{post.comments?.length || 0}</span>
                </button>
            </div>
        </div>
    )
}

Postitem.propTypes = {
    post: PropTypes.array
    // username: PropTypes.string,
    // title: PropTypes.string,
    // text: PropTypes.string,
    // imgUrl: PropTypes.string
}

export default Postitem
