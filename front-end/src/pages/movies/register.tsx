import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import { movieApi } from '../../lib/axios';

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
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [lengthInMinutes, setLengthInMinutes] = useState(0);
    const [coverUrl, setCoverUrl] = useState("");

    async function registerMovie(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await movieApi.post('movie/new', {
                title: title,
                releaseDate: releaseDate,
                lengthInMinutes: lengthInMinutes,
                coverUrl: coverUrl,
            });

            setTitle('');
            setReleaseDate('');
            setLengthInMinutes(0);
            setCoverUrl('');
        } catch (error) {
            console.log(error);
            alert('Falha ao criar o filme, tente novamente!');
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={registerMovie}>
                            <span className="register-title">
                                Cadastro de Filmes
                            </span>

                            <div className="wrap-input">
                                <input className={title !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Título'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={releaseDate !== "" ? 'has-val input-register-form' : 'input-register-form'} type="datetime-local"
                                    value={releaseDate}
                                    onChange={e => setReleaseDate(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Data de Lançamento'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={lengthInMinutes !== null ? 'has-val input-register-form' : 'input-register-form'} type="number"
                                    value={lengthInMinutes}
                                    onChange={e => setLengthInMinutes(e.target.valueAsNumber)}
                                />
                                <span className="input-effect" data-placeholder='Duração'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={coverUrl !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={coverUrl}
                                    onChange={e => setCoverUrl(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Link da Capa'></span>
                            </div>
                            <div className="container-register-form-btn">
                                <button className="register-form-btn">Fazer registro</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
