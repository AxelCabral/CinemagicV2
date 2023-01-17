import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { movieApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import moment from 'moment';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';

export default function Index() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="released-movies-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="movies-section-title">Produtos</h2>
          </div>
        </div>
        <div className="movies-list admin-list-movie">
              <div className="movie-list-item product-list-item">
                <Link
                  href={{
                    pathname: '/products/info/',
                  }}
                >
                  <img className="product-list-item-img" src="https://vivariomarrecife.com.br/wp-content/uploads/2021/09/1-4.png" alt="Imagem Produto" />
                </Link>
                <p className="product-name">ComboMega Pipoca e Refri</p>
                <p className="product-price">R$ 25,00</p>
                <button className="product-buy-btn">Comprar</button>
              </div>
              <div className="movie-list-item product-list-item">
                <Link
                  href={{
                    pathname: '/products/info/',
                  }}
                >
                  <img className="product-list-item-img" src="https://img.clasf.com.br/2019/11/29/copo-da-coca-cola-20191129053739.3555750015.jpg" alt="Imagem Produto" />
                </Link>
                <p className="product-name">Refrigerante Coca-Cola</p>
                <p className="product-price">R$ 13,00</p>
                <button className="product-buy-btn">Comprar</button>
              </div>
              <div className="movie-list-item product-list-item">
                <Link
                  href={{
                    pathname: '/products/info/',
                  }}
                >
                  <img className="product-list-item-img" src="https://a-static.mlcdn.com.br/1500x1500/balde-de-pipoca-coca-cola-medio-familia-cinema-filme-21l-plasutil/savaggiastore/661113/9af369ed0e6cfde890b8e2641bf019e6.jpg" alt="Imagem Produto" />
                </Link>
                <p className="product-name">Balde de Pipoca 2,1L</p>
                <p className="product-price">R$ 31,00</p>
                <button className="product-buy-btn">Comprar</button>
              </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
