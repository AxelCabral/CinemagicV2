/* eslint-disable @next/next/no-html-link-for-pages */
export default function Navbar() {
  return (
    <section className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/">
            <h1 className="logo">CINEMAGIC</h1>
          </a>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li className="menu-list-item">
              <a href="/">Página Inicial</a>
            </li>
            <li className="menu-list-item">
              <a href="/movies">Filmes</a>
            </li>
            <li className="menu-list-item">
              <a href="/genders">Gêneros</a>
            </li>
            <li className="menu-list-item">
              <a href="/sessions">Sessões</a>
            </li>
            <li className="menu-list-item">
              <a href="/users">Usuários</a>
            </li>
            <li className="profile-container">
              <a href="login">
                <div className="profile-picture"></div>Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
