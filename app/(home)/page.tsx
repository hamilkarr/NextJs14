import { Metadata } from 'next';
import Movie from '../../components/movie';
import styles from './home.module.css';

export const metadata: Metadata = {
    title: 'Home',
};

export const apiURL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    const res = await fetch(apiURL);
    const json = await res.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    );
}
