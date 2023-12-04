import React from 'react';

const Photo = ({ photo }) => {
    return (
        <div className="Photo">
            <p className='photo_title'>[ID: {photo.id}]: {photo.title}</p>
            <img src={photo.url} alt="" style={{ width: '100px', height: '100px' }} />
        </div>
    )
}

export default Photo