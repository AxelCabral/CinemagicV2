import { userApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import swal from 'sweetalert';
import Router from 'next/router';
import ReturnButton from '../components/returnButton';

interface userProps {
    user: {
        map: any; id: string, email: string, name: string, password: string
    }
}
export const getServerSideProps = async () => {

    const response = await userApi.get("users");
    return {
        props: {
            user: response.data.user
        }
    }
}


export default function Index(props: userProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    async function registerUser(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await userApi.post('users/new', {
                name: name,
                email: email,
                password: password,
            });

            setName('');
            setEmail('');
            setPassword('');

            if (response.status == 201) {
                swal("Sucesso!", response.data.message, "success");
            }
            Router.push({ pathname: '/users' });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao criar o usuário, tente novamente!", "error");
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={registerUser}>
                            <span className="register-title">
                                Cadastro de Usuário
                            </span>

                            <div className="wrap-input">
                                <input className={name !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Nome'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={email !== "" ? 'has-val input-register-form' : 'input-register-form'} type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Email'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={password !== "" ? 'has-val input-register-form' : 'input-register-form'} type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Senha'></span>
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
