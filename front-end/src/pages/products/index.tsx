import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { salesApi } from '../../lib/axios';
import Footer from '../components/footer';
import NavbarUser from '../components/navBarUser';
import moment from 'moment';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';
import { isPropertySignature } from 'typescript';
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';

interface ProductProps {
  product: {
    map: any;
    id: string,
    name: string,
    price: number,
    urlImg: string,
  }
  combo: {
    map: any;
    id: string;
    name: string;
    urlImg: string;
    totalPrice: number;
    promotional: number;
    active: boolean;
  }
}

export const getServerSideProps = async () => {

  const response = await salesApi.get("/products")
  return {
    props: {
      product: response.data.products,
      combo: response.data.combos,
    }
  }
}

export default function Index(props: ProductProps) {
  return (
    <div className="main-container">
      <NavbarUser></NavbarUser>
      <main className="released-movies-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="movies-section-title">Produtos</h2>
          </div>
        </div>
        <div className="movies-list admin-list-movie" id="products-list">
          {
            props.product.map((product: { id: Key | null | undefined; urlImg: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
              <div key={product.id} className="movie-list-item product-list-item">
                <img className="product-list-item-img" src={product.urlImg} alt="Imagem Produto" />
                <p className="product-name">{product.name}</p>
                <p className="product-price">R$ {product.price}</p>
                <button className="product-buy-btn">Comprar</button>
              </div>
            ))
          }
          {
            props.combo.map((combo: any) => (
              <div key={combo.id} className="movie-list-item product-list-item">
                <img className="product-list-item-img" src={combo.urlImg} alt="Imagem Produto" />
                <p className="product-name">{combo.name}</p>
                <p className="product-price">R$ {combo.totalPrice}</p>
                <button className="product-buy-btn">Comprar</button>
              </div>
            ))
          }
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
