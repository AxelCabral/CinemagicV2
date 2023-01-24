import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";
import { movieApi } from "../../lib/axios";
import Footer from "../components/footer";
import Navbar from "../components/navBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen, faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import ReturnButton from "../components/returnButton";

export default function Car() {
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
                                        <th>Quantidade</th>
                                        <th>Ações</th>
                                    </tr>
                                    <tr>
                                        <td>Refrigerante Coca-Cola</td>
                                        <td>R$ 13,00</td>
                                        <td>01</td>
                                        <td>
                                            <span
                                                className="icon fa-trash"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                            <span
                                                className="icon fa-trash"
                                            >
                                                <FontAwesomeIcon icon={faMinusCircle} />
                                            </span>
                                            <span
                                                className="icon fa-trash"
                                            >
                                                <FontAwesomeIcon icon={faPlusCircle} />
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Balde de Pipoca 2,1L</td>
                                        <td>R$ 31,00</td>
                                        <td>01</td>
                                        <td>
                                            <span
                                                className="icon fa-trash"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                            <span
                                                className="icon fa-trash"
                                            >
                                                <FontAwesomeIcon icon={faMinusCircle} />
                                            </span>
                                            <span
                                                className="icon fa-trash"
                                            >
                                                <FontAwesomeIcon icon={faPlusCircle} />
                                            </span>
                                        </td>
                                    </tr>
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
