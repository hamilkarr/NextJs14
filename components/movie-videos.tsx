import { Key } from 'react';
import styles from './movie-video.module.css';
import { apiURL } from '../app/constants';

async function getVideos(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(apiURL + `/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((video: { id: Key; key: any; name: string; }) => (
                <iframe
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    title={video.name}
                />
            ))}
        </div>
    );
}
