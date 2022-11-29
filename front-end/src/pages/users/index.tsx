import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { userApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';

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

export const sendDeleteHeader = async (userID: string) => {
    const headerSent = await userApi.post("users/id/delete", {
    headers: {
      'id': userID
    }
  });
}
export default function Index(props: userProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="users-container">
        <h2 className="movies-section-title">Usuários</h2>
        <table className="users-table-list">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th> </th>
              <th> </th>
            </tr>
            {
              props.user.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><button className="user-form-button-text" onClick={() => sendDeleteHeader(user.id)}>Deletar</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
      <section className="user-form-container">
        <div className="user-form-shadowbox">
          <p className="user-form-title">Cadastre um novo usuário <a href="users/register">
            <button className="user-form-button-text">Cadastrar</button>
          </a>
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
