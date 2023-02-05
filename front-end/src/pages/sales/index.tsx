import Footer from '../components/footer';
import Navbar from '../components/navBar';
import { FormEvent, useState } from 'react';
import { salesApi } from '../../lib/axios';
import swal from 'sweetalert';
import Router, { withRouter } from 'next/router'
import ReturnButton from '../components/returnButton';

interface ReportProps {
    report: {
        map: any;
        cinema_id: string,
        month: number,
        year: number
    }
}

export default function Index(props: ReportProps) {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    async function generateReport(event: FormEvent) {
        event.preventDefault();
            
            setMonth('');
            setYear('');

            Router.push({ pathname: '/sales/reportMonth', query: { cinema_id: "7ac5813c-fa9b-4ccd-8abc-ce8a99ef729f", month: month, year: year} });
        }  
    
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className="container-register">
                    <div className="wrap-register">
                        <form className="register-form" onSubmit={generateReport}>
                            <span className="register-title">
                                Relatório
                            </span>

                            <div className="wrap-input">
                                    <select className={month !== "" ? 'has-val input-register-form' : 'input-register-form'}
                                        value={month}
                                        onChange={e => setMonth(e.target.value)}
                                    >
                                        <option value=""></option>
                                        <option value="01">Janeiro</option>
                                        <option value="02">Fevereiro</option>
                                        <option value="03">Março</option>
                                        <option value="04">Abril</option>
                                        <option value="05">Maio</option>
                                        <option value="06">Junho</option>
                                        <option value="07">Julho</option>
                                        <option value="08">Agosto</option>
                                        <option value="09">Setembro</option>
                                        <option value="10">Outubro</option>
                                        <option value="11">Novembro</option>
                                        <option value="12">Dezembro</option>

                                    </select>
                                    <span className="input-effect" data-placeholder='Mês'></span>
                                </div>

                            <div className="wrap-input">
                                <input className={year !== "" ? 'has-val input-register-form' : 'input-register-form'} type="text"
                                    value={year}
                                    onChange={e => setYear(e.target.value)} required
                                />
                                <span className="input-effect" data-placeholder='Ano'></span>
                            </div>
                            <div className="container-register-form-btn">
                                <button className="register-form-btn">Gerar Relatório</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
