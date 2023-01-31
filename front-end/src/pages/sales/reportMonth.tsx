import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { salesApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import ReturnButton from '../components/returnButton';

interface salesProps {
  sales: {
    map: any; id: string, cinema_id: string, value: string, type: string, description: string;
  }
}
export const getServerSideProps = async () => {

  const response = await salesApi.get("report/info");
  return {
    props: {
      sales: response.data.sales
    }
  }
}

export default function Index(props: salesProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="sales-container">
        <ReturnButton></ReturnButton>
        <div className='data-table-title'>
          <div className='main-text-title'>
            <h2 className="movies-section-title">Relatório do mês</h2>
          </div>
        </div>
        <div className='list-out-main'>
          <div className='list-out-data'>
            <div className='data-table'>
             <div className='profit-area'>
             <br />
              <p>Lucro do mês: {
              
              (2300).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
              <br />
              <hr />
              <br />
              <p>Entrada do mês: {(4800).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
              <br />
              <hr />
              <br />
              <p>Despesas do mês: {(2500.55).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
              <br />
             </div>
            </div>
          </div>
        </div>
        <div className='list-out-main'>
          <div className='list-out-data'>
            <div className='data-table'>
              <table className="users-table-list">
                <tbody>
                  <tr>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Data</th>
                  </tr>
                  {
                    props.sales.map((sales: { id: Key | null | undefined; value: any; type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; saleDate: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                      <tr key={sales.id}>
                        <td>{(sales.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                        <td>{sales.type}</td>
                        <td>{sales.description}</td>
                        <td>{sales.saleDate}</td>
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
