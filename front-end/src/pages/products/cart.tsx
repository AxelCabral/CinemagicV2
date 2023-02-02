import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";
import { salesApi } from "../../lib/axios";
import Footer from "../components/footer";
import Navbar from "../components/navBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import ReturnButton from "../components/returnButton";

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

function reload() {
    window.location.reload();
}

export const sendDeleteHeader = async (cartId: string | Key | null | undefined) => {

    const headerSent = await salesApi.delete("products/cart/id/delete", {
        headers: {
            'id': cartId
        }
    });
    swal("Sucesso!", headerSent.data.message, "success", {
        timer: 3000,
    });
    await new Promise(resolve => setTimeout(resolve, 3000));
    return reload();
}

export default function Car(props: CartProps) {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className="data-table-title">
                    <div className="main-text-title">
                        <h2 className="movies-section-title">Compras</h2>
                    </div>
                    <div className="button-table-style plus">
                        <a
                            href="/products/"
                            title="Comprar mais produtos"
                            target="_self"
                            rel="next"
                        >
                            <span className="icon fa-plus">
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </a>
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
                                        {/*<th>Quantidade</th>*/}
                                        <th>Ações</th>
                                    </tr>
                                    {
                                        props.Pcart != null ? props.Pcart.map((product: any) => (
                                            <tr key={product.cartId}>
                                                <td>{product.hasProduct.name}</td>
                                                <td>{(product.hasProduct.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                                {/*<td>01</td>*/}
                                                <td>
                                                    <span onClick={() => sendDeleteHeader(product.cartId)} className="icon fa-trash">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </span>
                                                </td>
                                            </tr>
                                        )) : props.Pcart == null
                                    }
                                    {
                                        props.Ccart != null ? props.Ccart.map((product: any) => (
                                            <tr key={product.cartId}>
                                                <td>{product.hasCombo.name}</td>
                                                <td>{(product.hasCombo.totalPrice).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                                {/*<td>01</td>*/}
                                                <td>
                                                    <span onClick={() => sendDeleteHeader(product.cartId)} className="icon fa-trash">
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </span>
                                                </td>
                                            </tr>
                                        )) : props.Ccart == null
                                    }
                                </tbody>
                            </table>
                            <button className="product-buy-btn">Prosseguir Compra</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}
