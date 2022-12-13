import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import { movieApi } from '../../lib/axios';
import swal from 'sweetalert';
import Router, { withRouter } from 'next/router'
import ReturnButton from '../components/returnButton';

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

export default function Index(props: MovieProps) {
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [lengthInMinutes, setLengthInMinutes] = useState<number | undefined>(undefined);
    const [coverUrl, setCoverUrl] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [parentalRatingType, setParentalRatingType] = useState("");
    const [dubbedVersion, setDubbedVersion] = useState("");
    const [subtitledVersion, setSubtitledVersion] = useState("");
    const [originalLanguage, setOriginalLanguage] = useState("");

    async function registerMovie(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await movieApi.post('movie/new', {
                title: title,
                releaseDate: releaseDate,
                lengthInMinutes: lengthInMinutes,
                coverUrl: coverUrl,
                synopsis: synopsis,
                parentalRatingType: parentalRatingType,
                dubbedVersion: Boolean(JSON.parse(dubbedVersion)),
                subtitledVersion: Boolean(JSON.parse(subtitledVersion)),
                originalLanguage: originalLanguage,
            });

            setTitle('');
            setReleaseDate('');
            setLengthInMinutes(undefined);
            setCoverUrl('');
            setSynopsis('');
            setParentalRatingType('');
            setDubbedVersion('');
            setSubtitledVersion('');
            setOriginalLanguage('');

            Router.push({ pathname: '/movies/registerPartTwo', query: { title: title } });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao criar o filme, tente novamente!", "error");
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className="container-register movie-grid-form">
                    <span className="register-title movie-grid">
                        Cadastro de Filmes
                    </span>
                    <form className="register-form" onSubmit={registerMovie}>
                        <div className="centered-movie-grid-form">
                            <div className="wrap-register movie-grid-form">
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
                                    <input className={lengthInMinutes !== undefined ? 'has-val input-register-form' : 'input-register-form'} type="number"
                                        value={lengthInMinutes}
                                        onChange={e => setLengthInMinutes(e.target.valueAsNumber)}
                                    />
                                    <span className="input-effect" data-placeholder='Duração'></span>
                                </div>
                                <div className="wrap-input">
                                    <textarea className={synopsis !== "" ? 'has-val input-register-form textarea' : 'input-register-form textarea'}
                                        value={synopsis}
                                        onChange={e => setSynopsis(e.target.value)}
                                    />
                                    <span className="input-effect" data-placeholder='Sinopse'></span>
                                </div>
                            </div>
                            <br></br>
                            <div className="wrap-register movie-grid-form">
                                <div className="wrap-input">
                                    <select className={parentalRatingType !== "" ? 'has-val input-register-form' : 'input-register-form'}
                                        value={parentalRatingType}
                                        onChange={e => setParentalRatingType(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <option value="L">L</option>
                                        <option value="10">10</option>
                                        <option value="12">12</option>
                                    </select>
                                    <span className="input-effect" data-placeholder='Classificação Indicativa'></span>
                                </div>
                                <div className="wrap-input">
                                    <select className={dubbedVersion !== "" ? 'has-val input-register-form' : 'input-register-form'}
                                        value={dubbedVersion}
                                        onChange={e => setDubbedVersion(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <option value="true">Sim</option>
                                        <option value="false">Não</option>
                                    </select>
                                    <span className="input-effect" data-placeholder='Dublado'></span>
                                </div>
                                <div className="wrap-input">
                                    <select className={subtitledVersion !== "" ? 'has-val input-register-form' : 'input-register-form'}
                                        value={subtitledVersion}
                                        onChange={e => setSubtitledVersion(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <option value="true">Sim</option>
                                        <option value="false">Não</option>
                                    </select>
                                    <span className="input-effect" data-placeholder='Legendado'></span>
                                </div>
                                <div className="wrap-input">
                                    <input className={originalLanguage !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                        value={originalLanguage}
                                        onChange={e => setOriginalLanguage(e.target.value)}
                                    />
                                    <span className="input-effect" data-placeholder='Idioma Original'></span>
                                </div>
                                <div className="wrap-input">
                                    <input className={coverUrl !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                        value={coverUrl}
                                        onChange={e => setCoverUrl(e.target.value)}
                                    />
                                    <span className="input-effect" data-placeholder='Link da Capa'></span>
                                </div>
                            </div>
                        </div>
                        <div className="container-register-form-btn">
                            <button className="register-form-btn movie-btn">Prosseguir registro</button>
                        </div>
                    </form>
                </div>
            </main >
            <Footer></Footer>
        </div >
    )
}
