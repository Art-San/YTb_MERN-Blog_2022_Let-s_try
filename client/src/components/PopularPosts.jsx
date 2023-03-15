import React from 'react'
import PropTypes from 'prop-types'

const PopularPosts = ({ post }) => {
    console.log('title', post)
    return (
        <div className=' bg-gray-600 my-1'>
            <div className="flex text-sm p-2 text-gray-300 hover:bg-gray-800 hover:text-white">
                {post.title}
            </div>
        </div>
    )
}

PopularPosts.propTypes = {
    post: PropTypes.array
}

export default PopularPosts
