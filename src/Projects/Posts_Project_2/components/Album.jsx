import React, { useState, useEffect } from 'react';

const Album = ({ album }) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch(`http://localhost:3500/photos?albumId=${album.Id}`);
            const savedPhotos = await response.json();
            setPhotos(savedPhotos);
        }
        (async () => await fetchPhotos())();
    }, [])

    return (
        <div>
            {photos.map((photo) => (
                <p>{photo.Id}</p>
            ))}
        </div>
    )
}

export default Album;