import Link from 'next/link';
import { apiURL } from '../app/(home)/page';
import styles from './movie-info.module.css';

export async function getMovie(id: string) {
    const response = await fetch(apiURL + `/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img
                src={movie.poster_path}
                className={styles.poster}
                alt={movie.title}
            />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <div className={styles.starsWithSimilar}>
                    <h3>⭐{movie.vote_average.toFixed(2)}</h3>
                    <Link href={`/movies/${id}/similar`}>See Similar Movies &rarr;</Link>
                    <Link href={`/movies/${id}/credits`}>See Credits Movies &rarr;</Link>
                </div>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={'_blank'}>
                    Homepage &rarr;
                </a>
            </div>
        </div>
    );
}
