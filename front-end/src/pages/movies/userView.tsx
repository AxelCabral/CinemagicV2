import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { movieApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import moment from 'moment';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';

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

function reload() {
  window.location.reload();
}

export const sendDeleteHeader = async (movieID: Key | null | undefined) => {
  const headerSent = await movieApi.delete("movie/id/delete", {
    headers: {
      'id': movieID
    }
  });
  swal("Sucesso!", headerSent.data.message, "success", {
    timer: 3000,
  });
  await new Promise(resolve => setTimeout(resolve, 3000));
  return reload();
}

export default function Index(props: MovieProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="released-movies-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="movies-section-title">Filmes</h2>
          </div>
        </div>
        <div className="movies-list admin-list-movie">
          {
            props.movie.map((movie: { id: Key | null | undefined; coverUrl: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; releaseDate: moment.MomentInput; }) => (
              <div key={movie.id} className="movie-list-item admin-list-item">
                <Link
                  href={{
                    pathname: '/movies/info/',
                    query: { id: movie.id },
                  }}
                >
                  <img className="movie-list-item-img" src={movie.coverUrl} alt="Capa do filme" />
                  <span className="movie-list-item-title">{movie.title}</span>
                </Link>
                <p className="movie-list-item-desc">
                    Lançamento: <br />{moment(movie.releaseDate).format('DD/MM/YYYY')}</p>
              </div>
            ))
          }
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
