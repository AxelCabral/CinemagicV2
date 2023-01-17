import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { salesApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';

interface salesProps {
  sales: {
    map: any; id: string, cinema_id: string, value: string, type: string, description: string;
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
function reload() {
  window.location.reload();
}

export const sendDeleteHeader = async (salesID: Key | null | undefined) => {
  const headerSent = await salesApi.delete("sales/id/delete", {
    headers: {
      'id': salesID
    }
  });
  swal("Sucesso!", headerSent.data.message, "success", {
    timer: 3000,
  });
  await new Promise(resolve => setTimeout(resolve, 3000));
  return reload();
}

export default function Index(props: salesProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="sales-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="movies-section-title">Vendas</h2>
          </div>
          <div className="button-table-style plus">
            <a href="sales/register" title="Nova venda" target="_self" rel="next">
              <span className='icon fa-plus'><FontAwesomeIcon icon={faPlus} /></span>
            </a>
          </div>
        </div>
        <div className='list-out-main'>
          <div className='list-out-data'>
            <div className='data-table'>
              <table className="users-table-list">
                <tbody>
                  <tr>
                    <th>Cinema</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                  </tr>
                  {
                    props.sales.map((sales: { id: Key | null | undefined; cinema_id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                      <tr key={sales.id}>
                        <td>{sales.cinema_id}</td>
                        <td>{sales.value}</td>
                        <td>{sales.type}</td>
                        <td>{sales.description}</td>
                        <td><span onClick={() => sendDeleteHeader(sales.id)} className='icon fa-trash'><FontAwesomeIcon icon={faTrash} /></span>
                          │
                          <Link
                            href={{
                              pathname: '/sales/update',
                              query: { id: sales.id },
                            }}
                          >
                            <span className='icon fa-pen'><FontAwesomeIcon icon={faPen} /></span>
                          </Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main >
      <Footer></Footer>
    </div >
  )
}