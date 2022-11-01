import './session.css';
import { useState } from 'react';

export default function FormSession() {
  
    const[movie, setMovie] = useState("");
    const[room, setRoom] = useState("");
    const[time, setTime] = useState("");
    const[local, setLocal] = useState("");
    const[status, setStatus] = useState("");

    return (
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
                            <span className="login-title">
                                Cadastro de Sessão
                            </span>

                            <div className="wrap-input">
                                <input className={movie !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={movie}
                                onChange={e => setMovie(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Filme'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={room !== "" ? 'has-val input-login-form' : 'input-login-form'} type="number" 
                                value={room}
                                onChange={e => setRoom(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Sala'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={time !== "" ? 'has-val input-login-form' : 'input-login-form'} type="time" 
                                value={time}
                                onChange={e => setTime(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Hora'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={local !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={local}
                                onChange={e => setLocal(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Local da Sessão'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={status !== "" ? 'has-val input-login-form' : 'input-login-form'} type="number" 
                                value={status}
                                onChange={e => setStatus(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Status da Sessão'></span>
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