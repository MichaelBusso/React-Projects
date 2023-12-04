import React from 'react';
import { useInView } from 'react-intersection-observer';

const Photo = ({ photo }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return (
        <div className="Photo">
            <p className='photo_title'>[ID: {photo.id}]: {photo.title}</p>
            <img ref={ref} src={inView ? photo.url : ''} alt="" style={{ width: '100px', height: '100px' }} />
        </div>
    )
}

export default Photo;