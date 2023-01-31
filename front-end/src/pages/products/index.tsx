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

interface ProductProps {
  product: {
    map: any;
    id: string,
    name: string,
    price: number,
    urlImg: string,
  }
}

export const getServerSideProps = async () => {

  const response = await salesApi.get("/products")
  return {
    props: {
      product: response.data.products,
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
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}
