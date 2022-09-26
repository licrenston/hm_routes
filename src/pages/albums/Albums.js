import React, {useEffect, useState} from 'react';

import {getAlbums} from "../../services/Json.placeholder";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then(value => setAlbums(value.data))
    }, [])

    return (
        <div>
            <h2>Albums</h2>
            {
                albums.map(value => <p>{JSON.stringify(value)}</p>)
            }
        </div>
    );
};

export default Albums;