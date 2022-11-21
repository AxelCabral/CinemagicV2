import { movieApi, userApi } from '../lib/axios';

interface HomeProps {
  movie: { id: string, title: string, releaseDate: Date, lengthInMinutes: number, coverUrl: string, }
}

export const getServerSideProps = async () => {

  const response = await movieApi.get("/movies")
  return {
    props: {
      movie: response.data.movie,
    }
  }
}

export default function Home(props: HomeProps) {
  return (
    <div className="main-container">
      <section className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <h1 className="logo">CineMagic</h1>
          </div>
          <div className="menu-container">
            <ul className="menu-list">
              <li className="menu-list-item active">Página Inicial</li>
              <li className="menu-list-item">Filmes</li>
              <li className="menu-list-item">Generos</li>
              <li className="menu-list-item">Sessões</li>
              <li className="menu-list-item">Usuários</li>
            </ul>
            <div className="profile-container">
              <img className="profile-picture" src="../images/userimg.png" alt="Imagem do ícone de usuário" />
              <div className="toggle">
                <i className="fas fa-moon toggle-icon"></i>
                <i className="fas fa-sun toggle-icon"></i>
                <div className="toggle-ball"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-container">
      </section>
      <main className="released-movies-container">
        <div className="movie-list-item">
          <img className="movie-list-item-img" src="" alt="" />
          <span className="movie-list-item-title">A mulher rei</span>
          <p className="movie-list-item-desc">Assista a história da mulher mais poderosa da terra!</p>
          <button className="movie-list-item-button">Comprar ingresso</button>
        </div>
      </main>
      <section className="news-container">
        <div className="news-banner">
          <img src="" alt="" />
        </div>
        <div className="news-title">
          <h3>Confira as novidades do nosso cinema!</h3>
        </div>
      </section>
      <section className="email-form-container">
        <p className="email-form-title">Receba nossa programação por email</p>
        <button className="email-form-button-text">Cadastre-se</button>
      </section>
      <footer>
        <div className="social-media-container"></div>
        <hr />
      </footer>
    </div>
  )
}
