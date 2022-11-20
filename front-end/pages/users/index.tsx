import { userApi } from '../../lib/axios';

interface userProps {
  user: {id: string, email: string, name: string, password: string}
}

export const getServerSideProps = async () => {

  const response2 = await userApi.get("users");
  return {
      props: {
        user: response2.data.user
      }
    }
}

export default function Index(props: userProps) {
  return (
    <div className="corpo-home">
                        <div className="card bg-dark" id="cartazes">
                            {
                              props.user.map(user => (
                                <div key={user.id}>Nome: {user.name}<b>Email: {user.email}</b><p>Senha: {user.password}</p></div>
                              ))
                            }
                        </div>
                        <div className="chamada"> 
                        </div>
    </div>
  )
}
