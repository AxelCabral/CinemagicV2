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
            <img className="movie-list-item-img" src="https://m.media-amazon.com/images/I/71ydFW-qgQL.jpg" alt="Capa do filme" />
            <span className="movie-list-item-title">Em busca da felicidade!</span>
            <p className="movie-list-item-desc">00/00/0000</p>
            <button className="movie-list-item-button">Comprar ingresso</button>
          </div>
        </div>
      </main>
      <section className="news-container">
      <hr className="hr-color-cinemagic"/>
        <h2 className="movies-section-title">Novidades</h2>
        <div className="news-list">
          <div className="news-list-item">
            <div className="news-banner">
              <img src="https://cdnim.prd.cineticket.com.br/home/carousel/9492caf55ef8471ca2e6ec8b77435def.jpg" alt="" />
            </div>
            <div className="news-title">
              <p>Chicken Popcorn, Experimente!</p>
            </div>
          </div>
          <div className="news-list-item">
            <div className="news-banner">
              <img src="https://cdnim.prd.cineticket.com.br/home/carousel/62a09bca1b9a469082d86e0c800fa2ca.jpg" alt="" />
            </div>
            <div className="news-title">
              <p>Garanta seu pão de queijo!</p>
            </div>
          </div>
          <div className="news-list-item">
            <div className="news-banner">
              <img src="https://www.cinemark.com.br/Content/assets/images/bg-auditorium-prime-hover.jpg" alt="" />
            </div>
            <div className="news-title">
              <p>Salas Bradesco Prime!</p>
            </div>
          </div>
          <div className="news-list-item">
            <div className="news-banner">
              <img src="https://cdnim.prd.cineticket.com.br/home/carousel/127d87cf38e04b8cb001b0604d36d76e.jpg" alt="" />
            </div>
            <div className="news-title">
              <p>Confira as novidades do nosso cinema!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="email-form-container">
        <div className="email-form-shadowbox"><p className="email-form-title">Receba nossa programação por email <a href="#"><button className="email-form-button-text">Cadastre-se</button></a></p></div>
      </section>
      <footer>
        <div className="social-media-container">
          <ul className='links-information'>
            <li><a href=""><span className='icon icon-facebook'></span></a></li>
          </ul>
        </div>
        <hr className="hr-color-cinemagic" />
        <div className="more-information">
          <div className="logo-container logo-footer">
            <a href="#"><span className="logo">CineMagic</span></a>
          </div>
          <p>Copyright © 2022 Cinemagic</p>
          <ul className='links-information'>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
