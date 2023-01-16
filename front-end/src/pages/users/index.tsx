import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { userApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import ReturnButton from '../components/returnButton';

interface userProps {
  user: {
    map: any; id: string, email: string, name: string, password: string
  }
}
export const getServerSideProps = async () => {

  const response = await userApi.get("users");
  return {
    props: {
      user: response.data.user
    }
  }
}
function reload() {
  window.location.reload();
}

export const sendDeleteHeader = async (userID: Key | null | undefined) => {
  const headerSent = await userApi.delete("users/id/delete", {
    headers: {
      'id': userID
    }
  });
  swal("Sucesso!", headerSent.data.message, "success", {
    timer: 3000,
  });
  await new Promise(resolve => setTimeout(resolve, 3000));
  return reload();
}

export default function Index(props: userProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="users-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="movies-section-title">Usuários</h2>
          </div>
          <div className="button-table-style plus">
            <a href="users/register" title="Novo usuário" target="_self" rel="next">
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
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Opções</th>
                  </tr>
                  {
                    props.user.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><span onClick={() => sendDeleteHeader(user.id)} className='icon fa-trash'><FontAwesomeIcon icon={faTrash} /></span>
                          │
                          <Link
                            href={{
                              pathname: '/users/update',
                              query: { id: user.id },
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
