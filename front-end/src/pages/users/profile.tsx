import React from 'react';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { userApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';

interface profileProps {
    username: string;
    email: string;
    profileImage: string;
}

export default function Profile(props: profileProps){
    return (
        
        <div className="main-container">
            <Navbar></Navbar>
            <main className="users-container">
                <ReturnButton></ReturnButton>
                <div className='data-table-title'>
                    <div className='main-text-title'>
                        <h2 className="movies-section-title">Histórico de compras</h2>
                    </div>
                </div>
                <div className='list-out-main'>
                    <div className='list-out-data'>
                        <div className='data-table'>
                            <table className="users-table-list">
                                <tbody>
                                    <tr>
                                        <th>Número da Compra:</th>
                                        <th>Data:</th>
                                        <th>Valor:</th>
                                        <th>Local:</th>
                                    </tr>
                                    <tr>
                                        <td>774582</td>
                                        <td>10/01/23</td>
                                        <td>45,99</td>
                                        <td>CineMagic Iguatemi</td>
                                    </tr>
                                    <tr>
                                        <td>897453</td>
                                        <td>17/01/23</td>
                                        <td>22,40</td>
                                        <td>CineMagic Iguatemi</td>
                                    </tr>
                                    <tr>
                                        <td>453234</td>
                                        <td>19/12/22</td>
                                        <td>17,99</td>
                                        <td>CineMagic Iguatemi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main >
            <Footer></Footer>
        </div >
    );
};

