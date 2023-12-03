import React, { useState, useEffect } from 'react';
import Album from './Album';

const AlbumWrapper = () => {

    const [albums, setAlbums] = useState([]);

    const userId = (JSON.parse(localStorage.getItem('activeUser')))[0].id;

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch(`http://localhost:3500/albums?userId=${userId}`);
            const savedAlbums = await response.json();
            setAlbums(savedAlbums);
        }
        (async () => await fetchAlbums())();
    }, [])

    return (
        <div>
            {albums.map((album, index) => (
                <>
                    <h1>{album.title}</h1>
                    <Album
                        album={album}
                        key={index}
                    />
                </>
            ))}
        </div>
    )
}

export default AlbumWrapper