/*import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import { movieApi } from '../../lib/axios';
import swal from 'sweetalert';
import Router, { withRouter } from 'next/router'
import ReturnButton from '../components/returnButton';

interface ReportProps {
    report: {
        id: string,
        title: string,
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
                            </div>
                            <div className="wrap-register movie-grid-form">
                                <div className="wrap-input">
                                    <select className={parentalRatingType !== "" ? 'has-val input-register-form' : 'input-register-form'}
                                        value={parentalRatingType}
                                        onChange={e => setParentalRatingType(e.target.value)}
                                    >
                                        <option value="Janeiro">Janeiro</option>
                                        <option value="Fevereiro">Fevereiro</option>
                                        <option value="Março">Março</option>
                                        <option value="Abril">Abril</option>
                                        <option value="Maio">Maio</option>
                                        <option value="Junho">Junho</option>
                                        <option value="Julho">Julho</option>
                                        <option value="Agosto">Agosto</option>
                                        <option value="Setembro">Setembro</option>
                                        <option value="Outubro">Outubro</option>
                                        <option value="Novembro">Novembro</option>
                                        <option value="Dezembro">Dezembro</option>
                                    </select>
                                    <span className="input-effect" data-placeholder='Mês'></span>
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
                            <button className="register-form-btn movie-btn">Gerar Relatório</button>
                        </div>
                    </form>
                </div>
            </main >
            <Footer></Footer>
        </div >
    )
}
*/