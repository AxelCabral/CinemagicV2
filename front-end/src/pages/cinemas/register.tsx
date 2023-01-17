import { cinemaApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import swal from 'sweetalert';
import Router from 'next/router';
import ReturnButton from '../components/returnButton';

interface cinemaProps {
    cinema: {
        map: any; id: string, name: string;
    }
}
export const getServerSideProps = async () => {

    const response = await cinemaApi.get("cinema");
    return {
        props: {
            cinema: response.data.cinema
        }
    }
}

export default function Index(props: cinemaProps) {
    const [name, setName] = useState("");


    async function registerCinema(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await cinemaApi.post('cinema/new', {
                name: name,
            });

            setName('');

            if (response.status == 201) {
                swal("Sucesso!", response.data.message, "success");
            }
            Router.push({ pathname: '/cinema' });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao criar o cinema, tente novamente!", "error");
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="cinema-container">
                <ReturnButton></ReturnButton>
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={registerCinema}>
                            <span className="register-title">
                                Cadastro de Cinemas
                            </span>

                            <div className="wrap-input">
                                <input className={name !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Nome'></span>
                            </div>
                            <div className="container-register-form-btn">
                                <button className="register-form-btn">Cadastrar Cinema</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
