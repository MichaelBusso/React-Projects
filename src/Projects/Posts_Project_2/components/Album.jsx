import React, { useState, useEffect } from 'react';
import Photo from './Photo';

const Album = ({ album, toggleShow, show }) => {

    const [photos, setPhotos] = useState([]);
    const [showPhotos, setShowPhotos] = useState([]);


    useEffect(() => {
        const fetchPhotos = async () => {
            const apiUrl = `http://localhost:3500/photos?albumId=${album.id}`;
            const response = await fetch(apiUrl);
            const savedPhotos = await response.json();
            setPhotos(savedPhotos);
        }
        (async () => await fetchPhotos())();
    }, [])

    const toggleShowPhotos = (id) => {
        showPhotos.includes(id) ? setShowPhotos(showPhotos.filter((albumId) => albumId !== id)) : setShowPhotos([...showPhotos, id]);
    }

    return (
        <div className='Album'>
            <p className='album_title' onClick={() => toggleShow(album.id)}>[ID: {album.id}]: {album.title}</p>
            <div className='album_photos'>
                {show &&
                    photos.map((photo, index) => (
                        <Photo
                            show={showPhotos.includes(photo.id) ? true : false}
                            photo={photo}
                            key={index}
                            toggleShow={toggleShowPhotos}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Album;