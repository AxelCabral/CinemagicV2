import { salesApi } from "../../lib/axios";
import Footer from "../components/footer";
import Navbar from "../components/navBar";
import swal from "sweetalert";
import ReturnButton from "../components/returnButton";
import { FormEvent, useState } from 'react';
import Router from 'next/router';

interface CartProps {
    Pcart: {
        map: any,
        cartId: string,
        productID: string,
        comboID: string,
        hasProduct: {
            map: any;
            id: string,
            name: string,
            price: number,
            urlImg: string,
        }
    }
    Ccart: {
        map: any,
        cartId: string,
        productID: string,
        comboID: string,
        hasCombo: {
            map: any;
            id: string;
            name: string;
            urlImg: string;
            totalPrice: number;
            promotional: number;
            active: boolean;
        }
    }
}

export const getServerSideProps = async () => {

    const response = await salesApi.get("/products/cart")
    return {
        props: {
            Pcart: response.data.Pcart,
            Ccart: response.data.Ccart,
        }
    }
}

export default function Car(props: CartProps) {
    var Total_Price = 0;
    var Name_List = [''];
    Name_List.pop();

    props.Pcart != null ? props.Pcart.map((product: any) => (
        Total_Price += product.hasProduct.price,
        Name_List.push(product.hasProduct.name)
    )) : props.Pcart == null

    props.Ccart != null ? props.Ccart.map((product: any) => (
        Total_Price += product.hasCombo.totalPrice,
        Name_List.push(product.hasCombo.name)
    )) : props.Ccart == null

    const nameListJoined = Name_List.join(',')
    async function registerSale(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await salesApi.post('sales/new', {
                type: 'Venda',
                description: nameListJoined,
                value: Total_Price,
                userID: 'userID123',
                cinema_id: '7ac5813c-fa9b-4ccd-8abc-ce8a99ef729f',
            });

            if (response.status == 201) {
                swal("Sucesso!", response.data.message, "success");
            }
            Router.push({ pathname: '/' });
        } catch (error) {
            console.log(error);
            swal("Falha!", "Falha ao finalizar a venda, tente novamente!", "error");
        }
    }

    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className="data-table-title">
                    <div className="main-text-title">
                        <h2 className="movies-section-title">Finalização de Compra</h2>
                    </div>
                </div>
                <div className="list-out-main">
                    <div className="list-out-data">
                        <div className="data-table">
                            <table className="users-table-list">
                                <tbody>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Preço</th>
                                    </tr>
                                    {
                                        props.Pcart != null ? props.Pcart.map((product: any) => (
                                            <tr key={product.cartId}>
                                                <td>{product.hasProduct.name}</td>
                                                <td>{(product.hasProduct.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                            </tr>
                                        )) : props.Pcart == null
                                    }
                                    {
                                        props.Ccart != null ? props.Ccart.map((product: any) => (
                                            <tr key={product.cartId}>
                                                <td>{product.hasCombo.name}</td>
                                                <td>{(product.hasCombo.totalPrice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                            </tr>
                                        )) : props.Ccart == null
                                    }
                                </tbody>
                            </table>
                            <table className="users-table-list">
                                <tbody>
                                    <tr>
                                        <th>Método de Pagamento</th>
                                        <th>Preço Total</th>
                                    </tr>
                                    <tr>
                                        <td>Cartão de Crédito</td>
                                        <td>{(Total_Price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <form className="register-form" onSubmit={registerSale}>
                                <div className="container-register-form-btn">
                                    <button className="register-form-btn">Finalizar Compra</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
