import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { salesApi } from '../../lib/axios';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import ReturnButton from '../components/returnButton';
import moment from 'moment';

interface salesProps {
  sales: {
    map: any; id: string, value: number, type: string, description: string, cinema_id: string, userID: string, createdAt: string;
  },
  expenses: {
    map: any; id: string, value: number, type: string, description: string, cinema_id: string, userID: string, createdAt: string;
  }
}
export const getServerSideProps = async (context: { query: { cinema_id: string, month: number, year: number; }; }) => {

  const { cinema_id } = context.query;
  const { month } = context.query;
  const { year } = context.query;

  const response = await salesApi.get("report/info", {
    headers: {
      cinema_id: cinema_id,
      month: month,
      year: year,
    }
  });
  return {
    props: {
      sales: response.data.sales,
      expenses: response.data.expenses
    }
  }
}

export default function Index(props: salesProps) {
  var Total_expenses = 0;
  var Total_profits = 0;
  var Total_sales = 0;

  props.sales != null ? props.sales.map((sales: any) => (
      Total_sales += sales.value
  )) : props.sales == null

  props.expenses != null ? props.expenses.map((sales: any) => (
      Total_expenses += sales.value
  )) : props.expenses == null

  Total_profits = Total_sales-Total_expenses;

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
              <p>Lucro do mês: {(Total_profits).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
              <br />
              <hr />
              <br />
              <p>Entrada do mês: {(Total_sales).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
              <br />
              <hr />
              <br />
              <p>Despesas do mês: {(Total_expenses).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p>
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
                    <th>Id</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                    <th>Data</th>
                  </tr>
                  {
                    props.sales != null ? props.sales.map((sales: { id: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; value: any; type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                      // eslint-disable-next-line react/jsx-key
                      <tr>
                        <td title={(sales.id)?.toString()}>ID</td>
                        <td>{(sales.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                        <td>{sales.type}</td>
                        <td>{sales.description}</td>
                        <td>{moment(sales.createdAt).format('DD/MM/YYYY')}</td>
                      </tr>
                    )) : props.sales == null
                  }
                  {
                    props.expenses != null ? props.expenses.map((sales: { id: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; value: any; type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                      // eslint-disable-next-line react/jsx-key
                      <tr>
                        <td title={(sales.id)?.toString()}>ID</td>
                        <td>{(sales.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                        <td>{sales.type}</td>
                        <td>{sales.description}</td>
                        <td>{moment(sales.createdAt).format('DD/MM/YYYY')}</td>
                      </tr>
                    )) : props.expenses == null
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
