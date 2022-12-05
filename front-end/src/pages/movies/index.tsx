import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { movieApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import moment from 'moment';
import Link from 'next/link';

interface MovieProps {
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

export default function Index(props: MovieProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="released-movies-container">
        <h2 className="movies-section-title">Filmes</h2>
        <div className="movies-list">
          {
            props.movie.map((movie: { id: Key | null | undefined; coverUrl: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; releaseDate: moment.MomentInput; }) => (
              <Link
                href={{
                  pathname: '/movies/info/',
                  query: {id: movie.id},
                }}
              >
                <div key={movie.id} className="movie-list-item">
                  <img className="movie-list-item-img" src={movie.coverUrl} alt="Capa do filme" />
                  <span className="movie-list-item-title">{movie.title}</span>
                  <p className="movie-list-item-desc">
                    Lançamento: <br />{moment(movie.releaseDate).add(1, 'd').format('DD/MM/YYYY')}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </main>
      <section className="user-form-container">
        <div className="user-form-shadowbox">
          <p className="user-form-title">Cadastre um novo filme <a href="movies/register">
            <button className="user-form-button-text">Cadastrar</button>
          </a>
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
