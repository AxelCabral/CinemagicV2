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
              <li className="menu-list-item"><a href="movies">Página Inicial</a></li>
              <li className="menu-list-item"><a href="movies">Filmes</a></li>
              <li className="menu-list-item"><a href="movies">Generos</a></li>
              <li className="menu-list-item"><a href="movies">Sessões</a></li>
              <li className="menu-list-item"><a href="users">Usuários</a></li>
              <li className="profile-container"><a href="login"><div className="profile-picture"></div></a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="banner-container">
      </section>
      <main className="released-movies-container">
        <h2 className="movies-section-title">Lançamentos</h2>
        <div className="movies-list">
          <div className="movie-list-item">
            <img className="movie-list-item-img" src="https://cdnim.prd.cineticket.com.br/asset/movie/7883/et-o-extraterrestre-poster-desktop-4766c.jpg" alt="Capa do filme" />
            <span className="movie-list-item-title">Em busca da felicidade!</span>
            <p className="movie-list-item-desc">00/00/0000</p>
            <button className="movie-list-item-button">Comprar ingresso</button>
          </div>
        </div>
      </main>
      <section className="news-container">
        <h2 className="movies-section-title">Novidades</h2>
        <div className="news-list">
          <div className="news-banner">
            <img src="" alt="" />
          </div>
          <div className="news-title">
            <p>Confira as novidades do nosso cinema!</p>
          </div>
        </div>
      </section>
      <section className="email-form-container">
        <p className="email-form-title">Receba nossa programação por email</p>
        <button className="email-form-button-text">Cadastre-se</button>
      </section>
      <footer>
        <div className="social-media-container"></div>
        <hr />
        <div className="more-information">
          <div className="logo-container">
            <span className="logo">CineMagic</span>
          </div>
          <p>Copyright © 2022 Cinemagic</p>
          <a href="#">Política de privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </footer>
    </div>
  )
}
