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

export const getServerSideProps = async (context: any) => {
    const { id } = context.query;

    const response = await salesApi.get("sales/update", {
        headers: {
            id: id,
        }
    });
    return {
        props: {
            sales: response.data.sales
        }
    }
}
export default function Index(props: salesProps) {

    const [value, setValue] = useState<number | undefined>(props.sales.value);
    const [type, setType] = useState(props.sales.type);
    const [description, setDescription] = useState(props.sales.description);
    async function registerSales(event: FormEvent) {
        event.preventDefault();
        try {
            var postData = {
                value: value,
                type: type,
                description: description,
            };

            let axiosConfig = {
                headers: {
                    id: props.sales.id,
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    "Accept": "application/json"
                }
            };
            const response = await salesApi.post('sales/id/update', postData, axiosConfig);

            if (response.status == 200) {
                swal("Sucesso!", response.data.message, "success");
            }
            Router.push({ pathname: '/sales' });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao atualizar a venda, tente novamente!", "error");
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
                                Atualização de Venda
                            </span>

                            <div className="wrap-input">
                                <input className={value !== undefined ? 'has-val input-register-form' : 'input-register-form'} type="number"
                                    value={value}
                                    onChange={e => setValue(e.target.valueAsNumber)}
                                />
                                <span className="input-effect" data-placeholder='Preço'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={type !== "" ? 'has-val input-register-form' : 'input-register-form'} type="string"
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Tipo'></span>
                            </div>
                            <div className="wrap-input">
                                <input className={description !== "" ? 'has-val input-register-form' : 'input-register-form'} type="string"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                                <span className="input-effect" data-placeholder='Descrição'></span>
                            </div>
                            <div className="container-register-form-btn">
                                <button className="register-form-btn">Confirmar edição</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
