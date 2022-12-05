import { userApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';


interface userProps {
    user: {
        map: any; id: string, email: string, name: string, password: string
    }
}


export const getServerSideProps = async (context: any) => {
    const { id } = context.query;

    const response = await userApi.get("users/update", {
        headers: {
            id: id,
        }
    });
    return {
        props: {
            user: response.data.user
        }
    }
}
export default function Index(props: userProps) {

    const [email, setEmail] = useState(props.user.email);
    const [password, setPassword] = useState(props.user.password);
    const [name, setName] = useState(props.user.name);
    async function registerUser(event: FormEvent) {
        event.preventDefault();
        try {
            var postData = {
                name: name,
                email: email,
                password: password,
              };
              
            let axiosConfig = {
                headers: {
                    id: props.user.id,
                    'Content-Type': 'application/json;charset=UTF-8', 
                    "Access-Control-Allow-Origin": "*", 
                    "Accept": "application/json"
                }
            };
            const response = await userApi.post('users/id/update', postData, axiosConfig);

            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error);
            alert('Falha ao atualizar o usuário, tente novamente!');
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={registerUser}>
                            <span className="register-title">
                                Atualização de Usuário
                            </span>

                            <div className="wrap-input">
                                <input className={name !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Nome'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={email !== "" ? 'has-val input-register-form' : 'input-register-form'} type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Email'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={password !== "" ? 'has-val input-register-form' : 'input-register-form'} type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
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
