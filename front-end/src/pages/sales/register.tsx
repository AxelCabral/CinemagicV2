import { salesApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import swal from 'sweetalert';
import Router from 'next/router';
import ReturnButton from '../components/returnButton';

interface salesProps {
    sales: {
        map: any; id: string, cinema_id: string, value: number, type: string, description: string;
    }
}
export const getServerSideProps = async () => {

    const response = await salesApi.get("sales");
    return {
        props: {
            sales: response.data.sales
        }
    }
}

export default function Index(props: salesProps) {
    const [value, setValue] = useState<number | undefined>(undefined);
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");


    async function registerSales(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await salesApi.post('sales/new', {
                value: value,
                type: type,
                description: description,
                cinema_id: "c2371b60-f540-419d-842e-ecd85feb325d",
            });

            setValue(undefined);
            setType('');
            setDescription('');

            if (response.status == 201) {
                swal("Sucesso!", response.data.message, "success");
            }
            Router.push({ pathname: '/sales' });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao criar venda, tente novamente!", "error");
        }
    }
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="sales-container">
                <ReturnButton></ReturnButton>
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={registerSales}>
                            <span className="register-title">
                                Cadastro de Vendas
                            </span>

                            <div className="wrap-input">
                                <input className={value !== null ? 'has-val input-register-form' : 'input-register-form'} type="number"
                                    value={value}
                                    onChange={e => setValue(e.target.valueAsNumber)} required
                                />
                                <span className="input-effect" data-placeholder='Valor'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={type !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={type}
                                    onChange={e => setType(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Tipo'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={description !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Descrição'></span>
                            </div>
                            <div className="container-register-form-btn">
                                <button className="register-form-btn">Cadastrar Relatório</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
