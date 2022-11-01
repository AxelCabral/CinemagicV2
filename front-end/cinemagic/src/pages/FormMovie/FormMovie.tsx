import './movie.css';
import { useState } from 'react';

export default function FormMovie() {
  
    const[title, setTitle] = useState("");
    const[gender, setGender] = useState("");
    const[duration, setDuration] = useState("");
    const[releaseDate, setReleaseDate] = useState("");
    const[rated, setRated] = useState("");

    return (
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
                            <span className="login-title">
                                Cadastro de Filmes
                            </span>

                            <div className="wrap-input">
                                <input className={title !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Título'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={gender !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Genero'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={duration !== "" ? 'has-val input-login-form' : 'input-login-form'} type="number" 
                                value={duration}
                                onChange={e => setDuration(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Duração'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={releaseDate !== "" ? 'has-val input-login-form' : 'input-login-form'} type="date" 
                                value={releaseDate}
                                onChange={e => setReleaseDate(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Data de Lançamento'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={rated !== "" ? 'has-val input-login-form' : 'input-login-form'} type="number" 
                                value={rated}
                                onChange={e => setRated(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Classificação Indicativa'></span>
                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );

}