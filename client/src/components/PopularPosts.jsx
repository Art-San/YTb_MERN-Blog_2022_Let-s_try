import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PopularPosts = ({ post }) => {
    console.log('title', post)
    return (
        <div className=' bg-gray-600 my-1'>
            <Link to={`${post._id}`} className="flex text-sm p-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                {post.title}
            </Link>
        </div>
    )
}

PopularPosts.propTypes = {
    post: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default PopularPosts
