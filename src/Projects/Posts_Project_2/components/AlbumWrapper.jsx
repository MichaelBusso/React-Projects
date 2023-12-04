import React, { useState, useEffect } from 'react';
import Album from './Album';
import './components style/AlbumWrapper.css';

const AlbumWrapper = () => {

    const [albums, setAlbums] = useState([]);
    const [showAlbums, setShowAlbums] = useState([]);

    const userId = (JSON.parse(localStorage.getItem('activeUser')))[0].id;

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch(`http://localhost:3500/albums?userId=${userId}`);
            const savedAlbums = await response.json();
            setAlbums(savedAlbums);
        }
        (async () => await fetchAlbums())();
    }, [])

    const toggleShow = (id) => {
        showAlbums.includes(id) ? setShowAlbums(showAlbums.filter((albumId) => albumId !== id)) : setShowAlbums([...showAlbums, id]);
    }

    return (
        <div className='AlbumWrapper'>
            <h1>Albums!</h1>
            {albums.map((album, index) => (
                <Album
                    show={showAlbums.includes(album.id) ? true : false}
                    album={album}
                    key={index}
                    toggleShow={toggleShow}
                />
            ))}
        </div>
    )
}

export default AlbumWrapper