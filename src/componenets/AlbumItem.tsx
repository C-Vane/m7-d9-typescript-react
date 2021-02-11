import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AlbumProps } from '../types/interfaces';

const AlbumItem = (props: AlbumProps) => {
    const { album } = props
    return <Col sm={12} md={6} lg={4} xl={3} className='col-xxl-2 mb-2 pr-3 pr-md-2 px-lg-2 fade-in'>
        <Link to={"/album/" + album.album.id}>
            <div className='album-card'>
                <img src={album.album.cover_medium} className='img-fluid' alt='album-art' />
                <h5>{album.title}</h5>
                {album.artist && (
                    <Link to={"/artist/" + album.artist.id}>
                        <p>{album.artist.name}</p>
                    </Link>
                )}
            </div>
        </Link>
    </Col>;
}


export default AlbumItem;