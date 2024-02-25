import { apiURL } from '../../../../(home)/page';
import { getMovie } from '../../../../../components/movie-info';
import styles from './movie-credits.module.css';

async function getCredits(id: string) {
    const response = await fetch(apiURL + `/${id}/credits`);
    return response.json();
}

export default async function movieCredits({ params: { id } }) {
    const credits = await getCredits(id);
    const originMovie = await getMovie(id);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{originMovie.title}'s Credits</h1>
            {credits.map(
                (cast: {
                    id: string;
                    profile_path: string;
                    name: string;
                    character: string;
                }) => (
                    <div className={styles.member} key={cast.id}>
                        <img
                            className={styles.img}
                            src={
                                cast.profile_path ??
                                'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
                            }
                            alt={cast.name}
                        />
                        <h1>{cast.character}</h1>
                        <h2 className={styles.realName}>{cast.name}</h2>
                    </div>
                )
            )}
        </div>
    );
}
