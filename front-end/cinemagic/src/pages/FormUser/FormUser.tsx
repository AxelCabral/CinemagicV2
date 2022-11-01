import './user.css';
import { useState } from 'react';

export default function FormUser() {
  
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[birthday, setBirthday] = useState("");
    const[phone, setPhone] = useState("");
    const[preference, setPreference] = useState("");

    return (
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
                            <span className="login-title">
                                Cadastro de Usuários
                            </span>

                            <div className="wrap-input">
                                <input className={name !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Nome'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={email !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Email'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={birthday !== "" ? 'has-val input-login-form' : 'input-login-form'} type="date" 
                                value={birthday}
                                onChange={e => setBirthday(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Data de Aniversário'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={phone !== "" ? 'has-val input-login-form' : 'input-login-form'} type="number" 
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Número de Telefone'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={preference !== "" ? 'has-val input-login-form' : 'input-login-form'} type="text" 
                                value={preference}
                                onChange={e => setPreference(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Preferencia do Usuário'></span>
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