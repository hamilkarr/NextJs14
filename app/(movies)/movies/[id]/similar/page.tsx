import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../../components/movie-info';
import styles from './movie-similar.module.css';
import { apiURL } from '../../../../constants';

async function getSimilar(id: string) {
    const response = await fetch(apiURL + `/${id}/similar`);
    return response.json();
}

export default async function movieSimilar({ params: { id } }) {
    const similar = await getSimilar(id);
    const originMovie = await getMovie(id);

    return (
        <div>
            <h1 className={styles.title}>{originMovie.title}'s Similar Movies</h1>
            {similar.map((movie: { id: string; title: string }) => (
                <Suspense key={movie.id} fallback={<h1>Loading movie info</h1>}>
                    <MovieInfo id={movie.id} />
                </Suspense>
            ))}
        </div>
    );
}
