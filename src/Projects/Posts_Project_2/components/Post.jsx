import React from 'react';
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";

const Post = ({ post, toggleShow, show }) => {
    return (
        <div className="Post">
            <p className='title'>[ID: {post.id}]: {post.title}</p>
            {!show ?
                <MdOutlineExpandMore className='more_less' onClick={() => toggleShow(post.id)} /> :
                <MdOutlineExpandLess className='more_less' onClick={() => toggleShow(post.id)} />}
            <div className='post_body'>
                {show && <p>{post.body}</p>}
            </div>
        </div>
    )
}

export default Post;