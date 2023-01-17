import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { cinemaApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';

interface cinemaProps {
  cinema: {
    map: any; id: string, name: string;
  }
}
export const getServerSideProps = async () => {

  const response = await cinemaApi.get("cinema");
  return {
    props: {
      cinema: response.data.cinema
    }
  }
}
function reload() {
  window.location.reload();
}

export const sendDeleteHeader = async (cinemaID: Key | null | undefined) => {
  const headerSent = await cinemaApi.delete("cinema/id/delete", {
    headers: {
      'id': cinemaID
    }
  });
  swal("Sucesso!", headerSent.data.message, "success", {
    timer: 3000,
  });
  await new Promise(resolve => setTimeout(resolve, 3000));
  return reload();
}

export default function Index(props: cinemaProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="cinema-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="cinema-section-title">Cinemas Cadastrados</h2>
          </div>
          <div className="button-table-style plus">
            <a href="cinema/register" title="Novo cinema" target="_self" rel="next">
              <span className='icon fa-plus'><FontAwesomeIcon icon={faPlus} /></span>
            </a>
          </div>
        </div>
        <div className='list-out-main'>
          <div className='list-out-data'>
            <div className='data-table'>
              <table className="cinema-table-list">
                <tbody>
                  <tr>
                    <th>Nome</th>
                  </tr>
                  {
                    props.cinema.map((cinema: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;}) => (
                      <tr key={cinema.id}>
                        <td>{cinema.name}</td>
                       
                        <td><span onClick={() => sendDeleteHeader(cinema.id)} className='icon fa-trash'><FontAwesomeIcon icon={faTrash} /></span>
                          │
                          <Link
                            href={{
                              pathname: '/cinema/update',
                              query: { id: cinema.id },
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
