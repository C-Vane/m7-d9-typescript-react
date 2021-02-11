
export interface AlbumItem {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string;
}
export interface Artist {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
}

export interface Album {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: Artist;
    album: AlbumItem;
    type: string;
}


export interface Genere {
    id: number;
    name: string;
    picture: string;
    type: string;
}

export interface Genres {
    data: Genere[];
}

export interface Contributor {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
    role: string;
}

export interface Artist {
    id: number;
    name: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    tracklist: string;
    type: string;
}

export interface Artist2 {
    id: number;
    name: string;
    tracklist: string;
    type: string;
}

export interface Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    md5_image: string;
    artist: Artist2;
    type: string;
}

export interface Tracks {
    data: Track[];
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export interface AlbumDetails extends Omit<Album, 'album'>, AlbumItem {
    upc: string;
    share: string;
    genre_id: number;
    genres: Genres;
    label: string;
    nb_tracks: number;
    fans: number;
    rating: number;
    release_date: string;
    record_type: string;
    available: boolean;
    contributors: Contributor[];
    tracks: Tracks;
}



export interface HomePageProps {
    getAlbums: (search: string) => any;
    loading: boolean;
}
export interface AlbumProps {
    album: Album
}
export interface AlbumPageProps { }