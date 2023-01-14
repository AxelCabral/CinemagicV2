import { movieApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import swal from 'sweetalert';
import Router from 'next/router';
import ReturnButton from '../components/returnButton';

interface genderProps {
    gender: {
        map: any; id: string, name: string
    }
}
export const getServerSideProps = async () => {

    const response = await movieApi.get("genders");
    return {
        props: {
            gender: response.data.gender
        }
    }
}

export default function Index(props: genderProps) {
    const [name, setName] = useState("");


    async function registerGender(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await movieApi.post('gender/new', {
                name: name,
            });

            setName('');

            if (response.status == 201) {
                swal("Sucesso!", response.data.message, "success");
            }
            Router.push({ pathname: '/genders' });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao criar o gênero, tente novamente!", "error");
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={registerGender}>
                            <span className="register-title">
                                Cadastro de Gênero
                            </span>

                            <div className="wrap-input">
                                <input className={name !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Nome'></span>
                            </div>
                            <div className="container-register-form-btn">
                                <button className="register-form-btn">Cadastrar gênero</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
