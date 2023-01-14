import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { movieApi } from "../../lib/axios";
import Footer from "../components/footer";
import Navbar from "../components/navBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import ReturnButton from "../components/returnButton";

interface genderProps {
  gender: {
    map: any;
    id: string;
    name: string;
  };
}
export const getServerSideProps = async () => {
  const response = await movieApi.get("genders");
  return {
    props: {
      gender: response.data.gender,
    },
  };
};
function reload() {
  window.location.reload();
}

export const sendDeleteHeader = async (genderID: Key | null | undefined) => {
  const headerSent = await movieApi.delete("gender/id/delete", {
    headers: {
      id: genderID,
    },
  });
  swal("Sucesso!", headerSent.data.message, "success", {
    timer: 3000,
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return reload();
};

export default function Index(props: genderProps) {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <main className="users-container">
        <ReturnButton></ReturnButton>
        <div className="data-table-title">
          <div className="main-text-title">
            <h2 className="movies-section-title">Gêneros</h2>
          </div>
          <div className="button-table-style plus">
            <a
              href="genders/register"
              title="Novo gênero"
              target="_self"
              rel="next"
            >
              <span className="icon fa-plus">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </a>
          </div>
        </div>
        <div className="list-out-main">
          <div className="list-out-data">
            <div className="data-table">
              <table className="users-table-list">
                <tbody>
                  <tr>
                    <th>Gênero</th>
                    <th>Opções</th>
                  </tr>
                  {props.gender.map(
                    (gender: {
                      id: Key | null | undefined;
                      name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;
                    }) => (
                      <tr key={gender.id}>
                        <td>{gender.name}</td>
                        <td>
                          <span
                            onClick={() => sendDeleteHeader(gender.id)}
                            className="icon fa-trash"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </span>
                          │
                          <Link
                            href={{
                              pathname: "/genders/update",
                              query: { id: gender.id },
                            }}
                          >
                            <span className="icon fa-pen">
                              <FontAwesomeIcon icon={faPen} />
                            </span>
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
