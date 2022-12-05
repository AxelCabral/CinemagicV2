import { movieApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import moment from 'moment';

interface MovieProps {
    movie: {
        map: any;
        id: string,
        title: string,
        releaseDate: string,
        lengthInMinutes: number,
        coverUrl: string,
        synopsis: string,
        parentalRatingType: string,
        dubbedVersion: Boolean,
        subtitledVersion: Boolean,
        originalLanguage: string,
    }
}
export const getServerSideProps = async () => {

    const response = await movieApi.get("movie/info", {
        headers: {
            id: '2f535732-3564-4d2a-944f-304da2fd042c',
        }
    })
    return {
        props: {
            movie: response.data.movie,
        }
    }
}

export default function Index(props: MovieProps) {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <section className="banner-container">
            </section>
            <main className="info-movie-container">
                <h2 className="movies-section-title">Filme {props.movie.title}</h2>
                {
                    <div key={props.movie.id} className="movie-info-main">
                        <div className="movie-info-banner"></div>
                        <img className="movie-info-img" src={props.movie.coverUrl} alt="Capa do filme" />
                        <div className="movie-info">
                            <h3>Sinopse</h3>
                            <p className='movie-info-desc'>{props.movie.synopsis}</p>
                            <p className="movie-info-desc">
                                Lançamento: <br />{moment(props.movie.releaseDate).add(1, 'd').format('DD/MM/YYYY')}</p>
                        </div>
                    </div>
                }
            </main>
            <Footer></Footer>
        </div>
    )
}
