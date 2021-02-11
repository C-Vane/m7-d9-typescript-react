import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom'
import { Album, AlbumPageProps } from '../../types/interfaces'



type TParams = { id: string };

type AlbumPageInterference = RouteComponentProps<TParams> & AlbumPageProps;



const AlbumPage = (props: AlbumPageInterference) => {
    const id = props.match.params.id
    //const [album, setAlbum] = useState({ })
    const [loading, setLoading] = useState<boolean>(false);
    const getAlbum = async () => {
        const API_HOST = "deezerdevs-deezer.p.rapidapi.com";
        const API_KEY = "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc";
        const API_BASE_URL = "https://rapidapi.p.rapidapi.com";


        try {
            const response = await fetch(`${API_BASE_URL}/album/${id}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": API_KEY,
                    "x-rapidapi-host": API_HOST,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setLoading(false);
                console.log(JSON.stringify(data))
            }
            setLoading(false);
            throw new Error(response.statusText)
        } catch (e) {
            setLoading(false);
            console.error(`API ERROR : ${e.message}`);

        }


    }
    useEffect(() => {
        getAlbum()
    }, [])
    return <div></div>;
}


export default AlbumPage;