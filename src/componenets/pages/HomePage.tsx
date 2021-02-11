import React, { useState } from 'react';
import { Button, Row, Container } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom'
import { Album, HomePageProps } from '../../types/interfaces';
import AlbumItem from '../AlbumItem';

type HomePageInterfaces = RouteComponentProps & HomePageProps

const HomePage = (props: HomePageInterfaces) => {

    const { getAlbums } = props
    const [albums, setAlbums] = useState<Album[]>([])
    const [searchString, setSearchString] = useState<string>("");

    const fetchData = async () => {
        const albumArray: Album[] = await getAlbums(searchString)
        albumArray.length > 0 && setAlbums(albumArray)
        setSearchString("")
    }
    console.log(JSON.stringify(albums))
    return <div id="HomePage">
        <Container>
            <Row>
                <input type="text" value={searchString} onChange={(e) => setSearchString(e.target.value)} placeholder="Search for music..." />
                <Button disabled={!searchString.length} onClick={fetchData}>Search</Button>
            </Row>
            <Row>
                {albums.length > 0 && albums.map((album: Album) => <AlbumItem album={album} />)}
            </Row>
        </Container>
    </div>;
}


export default HomePage;



