import { movieApi, userApi } from '../lib/axios';
import moment from 'moment';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import Navbar from './components/navBar'
import Footer from './components/footer'

interface HomeProps {
    movie: {
        map: any;
        id: string,
        title: string,
        releaseDate: string,
        lengthInMinutes: number,
        coverUrl: string,
    }
}

export const getServerSideProps = async () => {

    const response = await movieApi.get("/movies")
    return {
        props: {
            movie: response.data.movie,
        }
    }
}

export default function Home(props: HomeProps) {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <section className="banner-container">
            </section>
            <main className="released-movies-container">
                <h2 className="movies-section-title">Lançamentos</h2>
                <div className="movies-list">
                    {
                        props.movie.map((movie: { id: Key | null | undefined; coverUrl: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; releaseDate: moment.MomentInput; }) => (
                            <div key={movie.id} className="movie-list-item">
                                <img className="movie-list-item-img" src={movie.coverUrl} alt="Capa do filme" />
                                <span className="movie-list-item-title">{movie.title}</span>
                                <p className="movie-list-item-desc">
                                    Lançamento: <br />{moment(movie.releaseDate).add(1, 'd').format('DD/MM/YYYY')}</p>
                                <button className="movie-list-item-button">Comprar ingresso</button>
                            </div>
                        ))
                    }
                </div>
            </main>
            <section className="news-container">
                <hr className="hr-color-cinemagic" />
                <h2 className="movies-section-title">Novidades</h2>
                <div className="news-list">
                    <div className="news-list-item">
                        <div className="news-banner">
                            <a href="#"><img src="https://cdnim.prd.cineticket.com.br/home/carousel/9492caf55ef8471ca2e6ec8b77435def.jpg" alt="" /></a>
                        </div>
                        <div className="news-title">
                            <a href="#"><p>Chicken Popcorn, Experimente!</p></a>
                        </div>
                    </div>
                    <div className="news-list-item">
                        <div className="news-banner">
                            <a href="#"><img src="https://cdnim.prd.cineticket.com.br/home/carousel/62a09bca1b9a469082d86e0c800fa2ca.jpg" alt="" /></a>
                        </div>
                        <div className="news-title">
                            <a href="#"><p>Garanta seu pão de queijo!</p></a>
                        </div>
                    </div>
                    <div className="news-list-item">
                        <div className="news-banner">
                            <a href="#"><img src="https://www.cinemark.com.br/Content/assets/images/bg-auditorium-prime-hover.jpg" alt="" /></a>
                        </div>
                        <div className="news-title">
                            <a href="#"><p>Salas Bradesco Prime!</p></a>
                        </div>
                    </div>
                    <div className="news-list-item">
                        <div className="news-banner">
                            <a href="#"><img src="https://cdnim.prd.cineticket.com.br/home/carousel/127d87cf38e04b8cb001b0604d36d76e.jpg" alt="" /></a>
                        </div>
                        <div className="news-title">
                            <a href="#"><p>Confira as novidades do nosso cinema!</p></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="email-form-container">
                <div className="email-form-shadowbox"><p className="email-form-title">Receba nossa programação por email <a href="#"><button className="email-form-button-text">Cadastre-se</button></a></p></div>
            </section>
            <Footer></Footer>
        </div>
    )
}