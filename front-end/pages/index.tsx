import { movieApi, userApi } from '../lib/axios';

interface HomeProps {
  movie: { id: string, title: string, releaseDate: Date, lengthInMinutes: number, coverUrl: string, }
}

export const getServerSideProps = async () => {

  const response = await movieApi.get("/movies");
  return {
      props: {
        movie: response.data.movie,
      }
    }
}

export default function Home(props: HomeProps) {
  return (
    <div className="corpo-home">
                        <div className="card bg-dark" id="cartazes">
                            {
                              props.movie.map(movie => (
                                <div key={movie.id} className='cartaz'>{movie.title}<img className='cartaz' src={movie.coverUrl}></img></div>
                              ))
                            }
                        </div>
                        <div className="chamada"> 
                        </div>
    </div>
  )
}
