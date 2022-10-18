import './login.css';
import { useState } from 'react';

export default function Login() {
  
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
            <div className="container">
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
                            <span className="login-title">
                                Bem Vindo!
                            </span>

                            <div className="wrap-input">
                                <input className={email !== "" ? 'has-val input-login-form' : 'input-login-form'} type="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Email'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={password !== "" ? 'has-val input-login-form' : 'input-login-form'} type="password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Senha'></span>
                            </div>

                            <div className="container-login-form-btn">
                                <button className="login-form-btn">Fazer Login</button>
                            </div>

                            <div className="text-center">
                                <span className="text-new-account">Ainda não possui uma conta?</span>
                                <a href="#" className="text-new-account2">Criar conta</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );

}